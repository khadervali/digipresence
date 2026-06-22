#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ENV_FILE="${ENV_FILE:-$ROOT_DIR/.env.hostinger}"

if [[ ! -f "$ENV_FILE" ]]; then
  echo "Missing env file: $ENV_FILE"
  echo "Create it from .env.hostinger.example"
  exit 1
fi

# shellcheck disable=SC1090
source "$ENV_FILE"

required_vars=(HOSTINGER_HOST HOSTINGER_USER HOSTINGER_APP_DIR HOSTINGER_REPO)
for name in "${required_vars[@]}"; do
  if [[ -z "${!name:-}" ]]; then
    echo "Missing required variable: $name"
    exit 1
  fi
done

HOSTINGER_BRANCH="${HOSTINGER_BRANCH:-main}"
HOSTINGER_PORT="${HOSTINGER_PORT:-22}"
HOSTINGER_INSTALL_CMD="${HOSTINGER_INSTALL_CMD:-npm ci}"
HOSTINGER_BUILD_CMD="${HOSTINGER_BUILD_CMD:-npm run build}"
HOSTINGER_RESTART_CMD="${HOSTINGER_RESTART_CMD:-}"
HOSTINGER_NODE_VERSION="${HOSTINGER_NODE_VERSION:-}"
HOSTINGER_PRE_DEPLOY_CMD="${HOSTINGER_PRE_DEPLOY_CMD:-}"
HOSTINGER_POST_DEPLOY_CMD="${HOSTINGER_POST_DEPLOY_CMD:-}"

if ! command -v ssh >/dev/null 2>&1; then
  echo "ssh command not found"
  exit 1
fi

SSH_ARGS=(-p "$HOSTINGER_PORT")
if [[ -n "${HOSTINGER_SSH_KEY:-}" ]]; then
  SSH_ARGS+=(-i "$HOSTINGER_SSH_KEY")
fi

PRE_B64="$(printf '%s' "$HOSTINGER_PRE_DEPLOY_CMD" | base64)"
POST_B64="$(printf '%s' "$HOSTINGER_POST_DEPLOY_CMD" | base64)"

echo "Deploying branch '$HOSTINGER_BRANCH' from '$HOSTINGER_REPO' to '$HOSTINGER_USER@$HOSTINGER_HOST:$HOSTINGER_APP_DIR'"

ssh "${SSH_ARGS[@]}" "$HOSTINGER_USER@$HOSTINGER_HOST" 'bash -s' -- \
  "$HOSTINGER_APP_DIR" \
  "$HOSTINGER_REPO" \
  "$HOSTINGER_BRANCH" \
  "$HOSTINGER_INSTALL_CMD" \
  "$HOSTINGER_BUILD_CMD" \
  "$HOSTINGER_RESTART_CMD" \
  "$HOSTINGER_NODE_VERSION" \
  "$PRE_B64" \
  "$POST_B64" <<'REMOTE_SCRIPT'
set -euo pipefail

APP_DIR="$1"
REPO="$2"
BRANCH="$3"
INSTALL_CMD="$4"
BUILD_CMD="$5"
RESTART_CMD="$6"
NODE_VERSION="$7"
PRE_B64="$8"
POST_B64="$9"

decode_b64() {
  printf '%s' "$1" | base64 --decode 2>/dev/null || true
}

PRE_CMD="$(decode_b64 "$PRE_B64")"
POST_CMD="$(decode_b64 "$POST_B64")"

if [[ -n "$NODE_VERSION" ]]; then
  if [[ -s "$HOME/.nvm/nvm.sh" ]]; then
    # shellcheck disable=SC1090
    source "$HOME/.nvm/nvm.sh"
    nvm install "$NODE_VERSION"
    nvm use "$NODE_VERSION"
  elif [[ -s "/usr/local/nvm/nvm.sh" ]]; then
    # shellcheck disable=SC1091
    source "/usr/local/nvm/nvm.sh"
    nvm install "$NODE_VERSION"
    nvm use "$NODE_VERSION"
  else
    echo "HOSTINGER_NODE_VERSION provided, but nvm was not found."
    exit 1
  fi
fi

if [[ -n "$PRE_CMD" ]]; then
  echo "Running pre-deploy hook"
  bash -lc "$PRE_CMD"
fi

mkdir -p "$(dirname "$APP_DIR")"

if [[ ! -d "$APP_DIR/.git" ]]; then
  echo "Cloning repository"
  git clone --branch "$BRANCH" --single-branch "$REPO" "$APP_DIR"
else
  echo "Updating repository"
  cd "$APP_DIR"
  git fetch --all --prune
  git checkout "$BRANCH"
  git pull --ff-only origin "$BRANCH"
fi

cd "$APP_DIR"

if [[ -n "$INSTALL_CMD" && "$INSTALL_CMD" != "skip" ]]; then
  echo "Running install command: $INSTALL_CMD"
  bash -lc "$INSTALL_CMD"
fi

if [[ -n "$BUILD_CMD" && "$BUILD_CMD" != "skip" ]]; then
  echo "Running build command: $BUILD_CMD"
  bash -lc "$BUILD_CMD"
fi

if [[ -n "$RESTART_CMD" && "$RESTART_CMD" != "skip" ]]; then
  echo "Running restart command: $RESTART_CMD"
  bash -lc "$RESTART_CMD"
fi

if [[ -n "$POST_CMD" ]]; then
  echo "Running post-deploy hook"
  bash -lc "$POST_CMD"
fi

echo "Deploy completed successfully"
REMOTE_SCRIPT

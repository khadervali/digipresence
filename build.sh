#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"

if [ ! -f "$ROOT/package.json" ]; then
  echo "Error: package.json not found. Run npm install after scaffolding the React app."
  exit 1
fi

cd "$ROOT"
npm install 2>&1
NODE_ENV=development npm run build

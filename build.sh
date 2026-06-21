#!/usr/bin/env bash
# ═══════════════════════════════════════════════════════════════
# DigiPresence Website — Build Script
# Assembles component partials into a single production index.html
# ═══════════════════════════════════════════════════════════════
set -euo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"
SRC="$ROOT/src"
OUT="$ROOT/index.html"
ASSETS_SRC="$ROOT/../DigiPresence Design System/assets"

# Verify source dirs exist
for d in "$SRC/components" "$SRC/css" "$SRC/js" "$ASSETS_SRC"; do
  if [ ! -d "$d" ]; then
    echo "Error: missing directory $d"
    exit 1
  fi
done

echo "Building DigiPresence website..."

# Start building
cat > "$OUT" << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="DigiPresence — We build websites, run social media, and place talent for ambitious small businesses. Your brand, impossible to ignore.">
<title>DigiPresence — Digital presence for ambitious small businesses</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../DigiPresence Design System/styles.css">
<style>
EOF

# Inline CSS
echo "/* Base */" >> "$OUT"
cat "$SRC/css/base.css" >> "$OUT"
echo "" >> "$OUT"
echo "/* Components */" >> "$OUT"
cat "$SRC/css/components.css" >> "$OUT"
echo "" >> "$OUT"
echo "/* Sections */" >> "$OUT"
cat "$SRC/css/sections.css" >> "$OUT"

cat >> "$OUT" << 'EOF'
</style>
</head>
<body>
EOF

# Inject components in order
for comp in header hero services work about testimonials pricing cta footer; do
  echo "  + component: $comp"
  echo "<!-- $comp -->" >> "$OUT"
  cat "$SRC/components/${comp}.html" >> "$OUT"
  echo "" >> "$OUT"
done

# Close body/html
cat >> "$OUT" << 'EOF'
<script>
EOF

cat "$SRC/js/main.js" >> "$OUT"

cat >> "$OUT" << 'EOF'
</script>
</body>
</html>
EOF

# Link assets directory if not exists
if [ ! -e "$ROOT/assets" ]; then
  ln -sf "$ASSETS_SRC" "$ROOT/assets"
  echo "  + linked assets -> $ROOT/assets"
fi

echo "Done. Built: $OUT"
echo "Size: $(wc -c < "$OUT") bytes"

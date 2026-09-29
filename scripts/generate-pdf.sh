#!/usr/bin/env bash
# ==============================================================================
# Generate CV PDF directly from index.html using Headless Google Chrome
# ==============================================================================

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"
INDEX_HTML="${ROOT_DIR}/index.html"
OUTPUT_PDF="${ROOT_DIR}/Mohavia Sinon-cv.pdf"

echo "==> Generating PDF CV from ${INDEX_HTML}..."

# Detect Chrome or Chromium binary
CHROME_BIN=""
if command -v google-chrome &>/dev/null; then
  CHROME_BIN="google-chrome"
elif command -v chromium-browser &>/dev/null; then
  CHROME_BIN="chromium-browser"
elif command -v chromium &>/dev/null; then
  CHROME_BIN="chromium"
elif command -v google-chrome-stable &>/dev/null; then
  CHROME_BIN="google-chrome-stable"
else
  echo "Error: Neither google-chrome nor chromium was found in PATH." >&2
  exit 1
fi

echo "==> Using browser binary: ${CHROME_BIN}"

"${CHROME_BIN}" \
  --headless=new \
  --disable-gpu \
  --no-sandbox \
  --no-pdf-header-footer \
  --print-to-pdf="${OUTPUT_PDF}" \
  "file://${INDEX_HTML}"

if [ -f "${OUTPUT_PDF}" ]; then
  FILE_SIZE=$(ls -lh "${OUTPUT_PDF}" | awk '{print $5}')
  echo "==> Successfully generated ${OUTPUT_PDF} (${FILE_SIZE})"
else
  echo "Error: PDF file generation failed." >&2
  exit 1
fi

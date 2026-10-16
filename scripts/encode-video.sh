#!/usr/bin/env bash
# ==============================================================================
# CAFE FREE INDIA: FFMPEG VIDEO ENCODING LADDER
# Master Prompt 2 (Section 26 & 28)
#
# Generates all required desktop, mobile and poster formats from a master file.
# Usage:
#   chmod +x scripts/encode-video.sh
#   ./scripts/encode-video.sh [path/to/master.mov]
# ==============================================================================

set -euo pipefail

INPUT_FILE="${1:-master.mov}"
OUTPUT_DIR="public/video"

if [ ! -f "$INPUT_FILE" ]; then
  echo "❌ Error: Master input video not found at '$INPUT_FILE'."
  echo "Usage: ./scripts/encode-video.sh <path_to_master_video>"
  exit 1
fi

mkdir -p "$OUTPUT_DIR"
echo "☕ Encoding Cafe Free India Hero Video Ladder from '$INPUT_FILE'..."

# ------------------------------------------------------------------------------
# 1. Desktop 1080p WebM (VP9, silent, 24fps)
# ------------------------------------------------------------------------------
echo "📹 1/7 Encoding Desktop 1080p WebM (VP9)..."
ffmpeg -y -i "$INPUT_FILE" -an \
  -vf "scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,fps=24" \
  -c:v libvpx-vp9 -b:v 0 -crf 32 -deadline good -cpu-used 2 -row-mt 1 \
  "$OUTPUT_DIR/hero-1080.webm"

# ------------------------------------------------------------------------------
# 2. Desktop 1080p MP4 (H.264 High, yuv420p, faststart, silent)
# ------------------------------------------------------------------------------
echo "📹 2/7 Encoding Desktop 1080p MP4 (H.264)..."
ffmpeg -y -i "$INPUT_FILE" -an \
  -vf "scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,fps=24" \
  -c:v libx264 -profile:v high -level 4.2 -pix_fmt yuv420p -crf 24 -preset slow \
  -movflags +faststart \
  "$OUTPUT_DIR/hero-1080.mp4"

# ------------------------------------------------------------------------------
# 3. Desktop 720p MP4 (Fallback for low-bandwidth connections)
# ------------------------------------------------------------------------------
echo "📹 3/7 Encoding Desktop 720p MP4..."
ffmpeg -y -i "$INPUT_FILE" -an \
  -vf "scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720,fps=24" \
  -c:v libx264 -profile:v high -level 3.1 -pix_fmt yuv420p -crf 26 -preset slow \
  -movflags +faststart \
  "$OUTPUT_DIR/hero-720.mp4"

# ------------------------------------------------------------------------------
# 4. Mobile 9:16 Vertical WebM (720x1280, VP9)
# ------------------------------------------------------------------------------
echo "📱 4/7 Encoding Mobile Vertical WebM (720x1280 VP9)..."
ffmpeg -y -i "$INPUT_FILE" -an \
  -vf "crop=ih*9/16:ih,scale=720:1280,fps=24" \
  -c:v libvpx-vp9 -b:v 0 -crf 34 -deadline good -cpu-used 2 -row-mt 1 \
  "$OUTPUT_DIR/hero-mobile.webm"

# ------------------------------------------------------------------------------
# 5. Mobile 9:16 Vertical MP4 (720x1280 H.264)
# ------------------------------------------------------------------------------
echo "📱 5/7 Encoding Mobile Vertical MP4 (720x1280 H.264)..."
ffmpeg -y -i "$INPUT_FILE" -an \
  -vf "crop=ih*9/16:ih,scale=720:1280,fps=24" \
  -c:v libx264 -profile:v main -pix_fmt yuv420p -crf 26 -preset slow \
  -movflags +faststart \
  "$OUTPUT_DIR/hero-mobile.mp4"

# ------------------------------------------------------------------------------
# 6. Extract Hero Extraction Frame (at 7.5 seconds)
# ------------------------------------------------------------------------------
echo "🖼️ 6/7 Extracting raw still frame for posters (timestamp 00:00:07.5)..."
ffmpeg -y -ss 00:00:07.5 -i "$INPUT_FILE" -frames:v 1 \
  -vf "scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080" \
  "$OUTPUT_DIR/temp-poster-1920.png"

ffmpeg -y -ss 00:00:07.5 -i "$INPUT_FILE" -frames:v 1 \
  -vf "crop=ih*9/16:ih,scale=720:1280" \
  "$OUTPUT_DIR/temp-poster-mobile.png"

# ------------------------------------------------------------------------------
# 7. Convert Posters to WebP and AVIF
# ------------------------------------------------------------------------------
echo "🖼️ 7/7 Generating WebP & AVIF posters..."

# Desktop Posters
ffmpeg -y -i "$OUTPUT_DIR/temp-poster-1920.png" -c:v libwebp -quality 85 "$OUTPUT_DIR/hero-poster-1920.webp"
if command -v avifenc &> /dev/null; then
  avifenc --min 0 --max 63 -a end-usage=q -a cq-level=22 "$OUTPUT_DIR/temp-poster-1920.png" "$OUTPUT_DIR/hero-poster-1920.avif"
  avifenc --min 0 --max 63 -a end-usage=q -a cq-level=22 "$OUTPUT_DIR/temp-poster-mobile.png" "$OUTPUT_DIR/hero-poster-mobile.avif"
else
  # Fallback to ffmpeg for AVIF if avifenc is not in PATH
  ffmpeg -y -i "$OUTPUT_DIR/temp-poster-1920.png" -c:v libsvtav1 -crf 28 "$OUTPUT_DIR/hero-poster-1920.avif" || cp "$OUTPUT_DIR/hero-poster-1920.webp" "$OUTPUT_DIR/hero-poster-1920.avif"
  ffmpeg -y -i "$OUTPUT_DIR/temp-poster-mobile.png" -c:v libsvtav1 -crf 28 "$OUTPUT_DIR/hero-poster-mobile.avif" || cp "$OUTPUT_DIR/hero-poster-mobile.webp" "$OUTPUT_DIR/hero-poster-mobile.avif"
fi

# Mobile Posters
ffmpeg -y -i "$OUTPUT_DIR/temp-poster-mobile.png" -c:v libwebp -quality 85 "$OUTPUT_DIR/hero-poster-mobile.webp"

rm -f "$OUTPUT_DIR/temp-poster-1920.png" "$OUTPUT_DIR/temp-poster-mobile.png"

echo "✅ Video ladder and posters successfully generated in $OUTPUT_DIR/:"
ls -lh "$OUTPUT_DIR"

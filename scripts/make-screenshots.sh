#!/usr/bin/env bash
# Membuat WebP siap saji dari tangkapan layar sumber.
#
#   scripts/make-screenshots.sh id
#
# Membaca design/screenshots/<bahasa>/<kunci>.jpg (atau .png), menulis
# public/screenshots/<bahasa>/<kunci>.webp selebar 720 px, lalu mencetak daftar
# kunci yang berhasil. Kunci yang belum ada sumbernya dilewati, jadi set
# Indonesia boleh dicicil.
#
# Langkah terakhir tetap manual: salin daftar yang dicetak ke bahasa yang sama
# di src/content/screenshots.json. Sebelum tercantum di sana, situs tetap
# memakai versi Inggrisnya.
#
# Butuh cwebp (brew install webp).

set -euo pipefail

locale="${1:-}"
if [[ -z "$locale" ]]; then
  echo "Pakai: scripts/make-screenshots.sh <bahasa>   (mis. id)" >&2
  exit 1
fi

if ! command -v cwebp >/dev/null 2>&1; then
  echo "cwebp tidak ditemukan. Pasang dulu: brew install webp" >&2
  exit 1
fi

cd "$(dirname "$0")/.."

src_dir="design/screenshots/$locale"
out_dir="public/screenshots/$locale"
mkdir -p "$out_dir"

keys=(home notes finance agenda news habits weather calendar earthquake)
made=()

for key in "${keys[@]}"; do
  src=""
  for ext in jpg jpeg png; do
    if [[ -f "$src_dir/$key.$ext" ]]; then
      src="$src_dir/$key.$ext"
      break
    fi
  done

  if [[ -z "$src" ]]; then
    echo "lewati  $key (belum ada di $src_dir)"
    continue
  fi

  # 720x1560 = rasio 9:19.5, sama dengan bingkai ponsel. Sumber dengan rasio
  # lain akan tergencet, jadi ambil tangkapan layarnya di 1080x2340.
  cwebp -quiet -q 82 -resize 720 1560 "$src" -o "$out_dir/$key.webp"
  echo "dibuat  $out_dir/$key.webp"
  made+=("\"$key\"")
done

echo
if [[ ${#made[@]} -eq 0 ]]; then
  echo "Tidak ada yang dibuat."
else
  joined=$(IFS=,; echo "${made[*]}")
  echo "Tempel ke src/content/screenshots.json:"
  echo "  \"$locale\": [${joined//,/, }]"
fi

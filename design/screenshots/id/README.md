# Tangkapan layar berbahasa Indonesia

Taruh sumbernya di folder ini. Selama belum ada, situs Indonesia memakai set
berbahasa Inggris dari `design/screenshots/en/`.

## Daftar yang dibutuhkan

| Berkas | Layar di aplikasi | Dipakai di |
|---|---|---|
| `home.jpg` | Beranda | Hero beranda |
| `notes.jpg` | Catatan | Beranda + `/fitur/catatan/` |
| `finance.jpg` | Keuangan | Beranda + `/fitur/keuangan/` |
| `agenda.jpg` | Agenda | Beranda + `/fitur/agenda/` |
| `news.jpg` | Berita | Beranda + `/fitur/berita/` |
| `habits.jpg` | Kebiasaan | Beranda + `/fitur/kebiasaan/` |
| `weather.jpg` | Cuaca | Beranda + `/fitur/cuaca/` |
| `calendar.jpg` | Kalender | Beranda + `/fitur/kalender/` |
| `earthquake.jpg` | Gempa | Beranda + `/fitur/gempa/` |

## Syarat

- **1080×2340 piksel** (rasio 9:19.5), JPEG atau PNG. Rasio lain akan
  tergencet di bingkai ponsel.
- Bahasa ponsel disetel ke **Indonesia**, supaya sapaan, nama menu, dan format
  tanggal ikut berbahasa Indonesia.
- Mode terang, sama dengan set Inggris, supaya beranda tetap seragam.
- Isi dengan **data contoh**, bukan data pribadi: nama, saldo, catatan, dan
  lokasi akan tayang di situs publik. Repositori ini juga publik.
- **Buramkan foto di layar Berita.** Fotonya milik penerbit. Simpan versi
  aslinya sebagai `news-original.jpg`; nama itu sudah diabaikan `.gitignore`.

## Memasangnya

```bash
scripts/make-screenshots.sh id
```

Skrip itu membuat WebP ke `public/screenshots/id/` dan mencetak daftar yang
harus ditempel ke kunci `id` di `src/content/screenshots.json`. Boleh dicicil:
yang belum ada tetap memakai versi Inggris. `npm run build` gagal bila ada nama
di daftar itu yang berkasnya tidak ada.

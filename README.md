# Morvyn: Website Perkenalan Aplikasi

Website dua bahasa untuk aplikasi Morvyn. Next.js 16 (App Router) + Tailwind CSS v4
+ HeroUI v3 + ikon Phosphor.

- `/`: Bahasa Indonesia
- `/en`: English
- `/privasi` · `/ketentuan`: Kebijakan Privasi & Ketentuan Layanan
- `/en/privacy` · `/en/terms`: versi Inggrisnya

## Menjalankan

```bash
npm run dev
```

Lalu buka <http://localhost:4322>.

Perintah lain: `npm run build` (build produksi, sekaligus memeriksa TypeScript)
dan `npm run lint`.

## Struktur berkas

```
src/
├── app/
│   ├── globals.css        # SELURUH tema: warna, font, animasi, utilitas
│   ├── icon.svg           # favicon (dipungut otomatis oleh Next.js)
│   ├── siteMetadata.ts    # <head> beranda, halaman fitur, & halaman hukum
│   ├── (id)/              # root layout <html lang="id">
│   │   ├── page.tsx       #   "/"
│   │   ├── fitur/[slug]/  #   "/fitur/catatan" dan tujuh menu lainnya
│   │   ├── privasi/       #   "/privasi"
│   │   └── ketentuan/     #   "/ketentuan"
│   └── (en)/en/           # root layout <html lang="en">
│       ├── page.tsx       #   "/en"
│       ├── features/[slug]/ # "/en/features/notes" dan tujuh menu lainnya
│       ├── privacy/       #   "/en/privacy"
│       └── terms/         #   "/en/terms"
├── components/
│   ├── BaseHtml.tsx       # kerangka <html> yang dipakai kedua bahasa
│   ├── SiteContent.tsx    # susunan bagian halaman, satu-satunya tempat urutan diatur
│   ├── Header.tsx         # navigasi, menu ponsel, pengalih bahasa & tema
│   ├── PhoneFrame.tsx     # bingkai ponsel + placeholder screenshot
│   ├── Reveal.tsx         # animasi muncul saat digulir
│   ├── featureIcons.tsx   # peta ikon & warna kedelapan menu
│   ├── sections/          # satu berkas per bagian beranda
│   ├── feature/           # kerangka halaman fitur + data terstrukturnya
│   └── legal/             # kerangka halaman hukum + penerjemah teks sebarisnya
├── content/
│   ├── types.ts           # bentuk salinan teks
│   ├── id.ts / en.ts      # SELURUH teks beranda
│   ├── site.ts            # URL Play Store, domain, daftar 29 portal berita
│   ├── screenshots.json   # tangkapan layar yang sudah ada per bahasa
│   ├── featurePages/      # isi halaman per menu (id.ts / en.ts)
│   └── legal/             # isi Kebijakan Privasi & Ketentuan Layanan (4 berkas)
├── public/screenshots/   # tangkapan layar di bingkai ponsel (sumbernya di design/screenshots/)
└── public/logo-morvyn.svg
```

Dua aturan yang memudahkan perawatan:

1. **Tidak ada teks yang ditulis langsung di komponen.** Semuanya lewat `content/`.
2. **`id.ts` dan `en.ts` memakai tipe `Dictionary` yang sama.** Kalau satu bahasa
   ketinggalan sebuah kunci, `npm run build` gagal, jadi terjemahan tidak bisa
   diam-diam tertinggal. Keempat berkas di `content/legal/` memakai tipe
   `LegalDocument` yang sama, dengan alasan yang persis sama.

---

## Yang masih perlu diisi

### 1. Screenshot aplikasi (sudah diisi, versi Inggris)

Kesembilan bingkai ponsel (satu di hero, delapan di bagian pembahasan fitur)
sudah berisi tangkapan layar aplikasi. Alamatnya dirakit `screenshotSrc()` di
`src/content/screenshots.ts`, dengan nama berkas sama dengan kunci menunya:

| Berkas | Dipakai di |
|---|---|
| `home.webp` | Hero (layar Beranda aplikasi) |
| `notes.webp`, `finance.webp`, `agenda.webp`, `news.webp`, `habits.webp`, `weather.webp`, `calendar.webp`, `earthquake.webp` | Bagian pembahasan tiap menu |

- **Yang disajikan** ada di `public/screenshots/<bahasa>/`: WebP lebar 720 px.
  Itu tiga kali lebar bingkai di ponsel (15rem), jadi tetap tajam tanpa
  mengirim gambar penuh.
- **Sumbernya** (JPEG 1080×2340) ada di `design/screenshots/<bahasa>/` dan
  tidak ikut disajikan.
- **Versi Indonesia belum ada.** Halaman Indonesia sementara memakai set
  berbahasa Inggris. Daftar layar dan syaratnya ada di
  `design/screenshots/id/README.md`. Boleh dicicil: taruh sumbernya di
  `design/screenshots/id/`, jalankan `scripts/make-screenshots.sh id`, lalu
  tempel daftar yang dicetaknya ke kunci `id` di `src/content/screenshots.json`.
  Kunci yang belum tercantum tetap memakai versi Inggris.
- **Build memeriksa daftarnya.** `npm run build` menjalankan
  `scripts/check-screenshots.mjs` lebih dulu, dan gagal bila ada nama di
  `screenshots.json` yang berkas WebP-nya tidak ada.
- **Foto berita diburamkan.** `news.jpg` memuat foto milik SCMP dan The
  Guardian, jadi fotonya diburamkan sebelum dipasang. Berkas aslinya,
  `news-original.jpg`, sengaja diabaikan `.gitignore`: repositori ini publik.

Membuat ulang WebP dari sumbernya (rasio wajib 9:19.5, mis. 1080×2340):

```bash
for k in home notes finance agenda news habits weather calendar earthquake; do cwebp -q 82 -resize 720 1560 design/screenshots/en/$k.jpg -o public/screenshots/en/$k.webp; done
```

Kalau berkas gambar suatu menu dihapus, bingkainya tidak kembali ke
placeholder: gambarnya tampil rusak. Placeholder hanya muncul bila prop `src`
pada `PhoneFrame` tidak diisi.

### 2. Google Play (sakelar sudah dinyalakan)

Seluruh ajakan mengunduh diatur satu sakelar di `src/content/site.ts`:

```ts
playStoreUrl: "https://play.google.com/store/apps/details?id=com.himikolab.morvyn",
playStoreLive: true,
```

Sakelar ini dinyalakan pada 14 Oktober 2026 atas keputusan pemilik. **Saat itu
alamat di `playStoreUrl` masih membalas 404**, jadi periksa lagi dengan
perintah `curl` di bawah. Kalau lama tetap 404, kembalikan ke `false`.

Selama `playStoreLive: false`, **tidak satu pun tautan ke Play Store dicetak**.
Yang berubah otomatis:

| Tempat | Saat `false` | Saat `true` |
|---|---|---|
| Header (dan menu ponsel) | "Segera", menuju `#unduh` | "Unduh", menuju Play Store |
| Tombol utama hero | "Segera di Google Play", menuju `#unduh` | "Unduh di Google Play" |
| Blok `#unduh` | Lencana + tombol Instagram & TikTok | Tombol unduh |
| Footer | baris "Google Play" disembunyikan | baris muncul |
| Tanya jawab | "Kapan Morvyn bisa diunduh?" disisipkan paling atas | tidak disisipkan |
| JSON-LD | tanpa `offers`, `downloadUrl`, `installUrl` | ketiganya dicetak |

Kedua salinan tersimpan utuh di kamus (`dict.cta` untuk versi terbit,
`dict.comingSoon` untuk versi "segera"), jadi berpindah arah cukup dengan
mengubah sakelarnya lalu deploy. Lencana di gambar Open Graph
(`design/og-*.svg`) TIDAK ikut sakelar: teksnya diganti dengan tangan, lalu
PNG-nya dibuat ulang.

Periksa alamatnya dengan:

```bash
curl -sI -o /dev/null -w '%{http_code}\n' "https://play.google.com/store/apps/details?id=com.himikolab.morvyn"
```

Harus `200`. Selama masih `404`, halaman yang mengajak mengunduh sesuatu yang
belum bisa dibuka merugikan dua kali: pengunjung sampai di halaman kosong, dan
Google melihat halaman promosi bertombol mati.

### 3. Alamat email kontak (sudah diisi)

`site.contactEmail` berisi `hi@himikolab.my.id`. Kalau suatu saat alamat itu
dicabut, kosongkan saja string-nya: baris "Kontak" di footer ikut hilang alih-alih
jadi tautan mati, dan `Organization.email` di data terstruktur ikut disesuaikan.

### 4. Halaman Kebijakan Privasi & Ketentuan Layanan (sudah ada)

Empat halaman, dua dokumen kali dua bahasa:

| Dokumen | Indonesia | Inggris |
|---|---|---|
| Kebijakan Privasi | `/privasi` | `/en/privacy` |
| Ketentuan Layanan | `/ketentuan` | `/en/terms` |

Isinya di `src/content/legal/`, kerangkanya di `src/components/legal/`.
Tautannya sudah terpasang di footer keempat halaman dan di beranda.

**Yang tidak boleh diubah tanpa berpikir dua kali:**

1. **Alamat `/privasi`.** Inilah URL yang didaftarkan ke Google Cloud Console
   (layar persetujuan OAuth) dan ke Play Console. Pengajuan verifikasi menunjuk
   alamat persis; memindahkannya membatalkan pemeriksaan yang sedang berjalan.
2. **Bagian "Kepatuhan terhadap Kebijakan Data Pengguna Layanan Google API"**
   di `privacy-id.ts` / `privacy-en.ts`. Verifikasi untuk scope sensitif
   (`drive.appdata`, `calendar.events`) hampir selalu ditolak kalau pernyataan
   kepatuhan beserta persyaratan **Limited Use** dan tautan ke halaman kebijakan
   Google tidak tercantum eksplisit.
3. **Nama aplikasi ditulis persis `Morvyn`**, sama dengan yang terdaftar di layar
   persetujuan OAuth.

Keduanya dirender penuh saat build: tidak ada bagian yang menunggu JavaScript.
Itu syarat, bukan kebetulan: pemeriksa Google membuka alamatnya sendiri, dan
halaman yang isinya baru muncul setelah skrip jalan berisiko dianggap kosong.
Periksa ulang setiap kali halaman ini disentuh:

```bash
npm run build && grep -c "Limited Use" out/privasi/index.html out/en/privacy/index.html
```

**Tanggal berlaku** dicatat per dokumen, karena keduanya bisa diperbarui pada
tanggal berbeda. Saat ini:

| Dokumen | Tanggal berlaku |
| --- | --- |
| Kebijakan Privasi | 14 Oktober 2026 |
| Ketentuan Layanan | 14 Oktober 2026 |

Kalau isi sebuah dokumen berubah, perbarui `effectiveDate` di kedua berkas
bahasanya (misalnya `privacy-id.ts` dan `privacy-en.ts`) DAN entrinya di
`legalEffectiveIso` di `src/content/legal/index.ts`. Yang pertama untuk pembaca.
Yang kedua dipakai untuk atribut `<time datetime>` sekaligus `lastmod` di peta
situs, jadi jangan sampai terlewat.

Dokumen ini disusun agar jujur terhadap perilaku aplikasi, tetapi **bukan nasihat
hukum**. Kalau Morvyn nanti diedarkan luas, tinjauan dari orang yang paham hukum
tetap sepadan.

### 5. Angka di bagian statistik (periksa dulu)

Tiga angka di bawah hero (`stats` pada `id.ts`/`en.ts`) sengaja hanya berisi
fakta yang bisa diperiksa: **8** fitur, **29** sumber berita, **2** bahasa.
Jumlah unduhan dan rating Play Store TIDAK dicantumkan karena angkanya belum
ada. Kalau nanti mau ditambahkan, ambil dari Play Console, jangan dikarang.

### 6. Satu jawaban FAQ yang perlu Anda pastikan

Isi FAQ disusun dari `REMOTE_CONFIG_MORVYN.md` dan keterangan Anda. "Morvyn
tersedia gratis di Google Play" sudah dipastikan pemilik pada 14 Oktober 2026:
gratis sepenuhnya, tanpa pembelian dalam aplikasi. Satu hal berikut belum
terkonfirmasi:

| Pertanyaan | Yang perlu dipastikan |
|---|---|
| Fitur mana yang jalan tanpa internet | Belum disinggung di FAQ. Layak ditambahkan kalau Catatan/Agenda/Kebiasaan memang bisa offline. |

---

## SEO

Semua berikut ini dibangun dari `src/content/`, jadi mengubah teksnya sekali
sudah cukup: metadata, peta situs, dan data terstruktur ikut menyesuaikan.

| Berkas | Isinya |
|---|---|
| `src/app/siteMetadata.ts` | Judul, deskripsi, canonical, hreflang, Open Graph, Twitter Card, arahan robots. Dipanggil kedua root layout supaya tidak ada bahasa yang tertinggal |
| `src/app/robots.ts` | Menghasilkan `/robots.txt` beserta baris `Sitemap:` |
| `src/app/sitemap.ts` | Menghasilkan `/sitemap.xml` (22 alamat), satu entri per bahasa lengkap dengan `xhtml:link` hreflang |
| `src/components/JsonLd.tsx` | Data terstruktur beranda: `Organization`, `WebSite`, `MobileApplication`, dan `WebPage`+`FAQPage` |
| `src/components/feature/FeatureJsonLd.tsx` | Data terstruktur halaman fitur: `WebPage`+`FAQPage` dan `BreadcrumbList`, menunjuk simpul aplikasi di beranda lewat `@id` |
| `public/og-id.png`, `public/og-en.png` | Gambar 1200×630 yang tampil saat tautannya dibagikan |
| `design/og-id.svg`, `design/og-en.svg` | Sumber kedua gambar di atas. Tidak ikut disajikan |

Gambar Open Graph dibuat ulang dari sumbernya dengan:

```bash
cd design && rsvg-convert -w 1200 -h 630 og-id.svg -o ../public/og-id.png && rsvg-convert -w 1200 -h 630 og-en.svg -o ../public/og-en.png
```

Beberapa hal yang sengaja diputuskan begitu:

- **`meta.title` dan `meta.ogTitle` berbeda.** `title` ditulis untuk daftar
  hasil pencarian, jadi memuat kata yang benar-benar diketik orang. `ogTitle`
  memakai taglinenya, karena yang melihatnya sudah menatap gambar dan lambang.
- **Tidak ada `aggregateRating` atau jumlah unduhan** di data terstruktur.
  Angkanya belum ada, dan mengarangnya bisa berbuntut sanksi manual dari Google.
- **`sameAs` diambil dari `socialLinks`** di `site.ts`. Itulah yang memberi tahu
  Google bahwa akun Instagram dan TikTok satu pemilik dengan situs ini; daftar
  di footer saja tidak cukup.
- **Peta situs memakai daftar `locales`.** Kalau nanti ada bahasa ketiga,
  entrinya bertambah sendiri.
- **`lastmod` beranda diisi dengan tangan** lewat `homeUpdatedIso` di `site.ts`.
  Perbarui hanya saat teks beranda atau daftar portal berita benar-benar
  berubah, bukan setiap deploy. Halaman fitur punya tanggalnya sendiri,
  `featurePagesUpdatedIso` di `src/content/featurePages/index.ts`.
- **Satu halaman per menu** (`/fitur/catatan/`, `/en/features/notes/`, dan
  seterusnya). Beranda hanya muat satu paragraf per menu, sedangkan orang
  mencari per kebutuhan: "aplikasi catatan dengan PDF", "info gempa BMKG".
  Isinya harus lebih dalam daripada beranda, bukan salinannya, dan setiap
  klaim harus sesuai Kebijakan Privasi. Halaman-halaman ini ditautkan dari
  bagian fitur beranda, dari footer setiap halaman, dan dari sesamanya.

### Mendaftarkan ke Google Search Console

1. Tambahkan properti bertipe **Domain** untuk `himikolab.my.id`, lalu
   verifikasi lewat data DNS TXT di Cloudflare. Satu verifikasi itu berlaku
   untuk `morvyn.himikolab.my.id` dan seluruh subdomain lainnya.
2. Kalau lebih memilih cara **HTML tag**, isi `site.googleSiteVerification` di
   `src/content/site.ts` dengan nilai `content="..."`-nya saja, lalu deploy
   ulang. Selama kosong, tagnya memang tidak dicetak.
3. Kirim `https://morvyn.himikolab.my.id/sitemap.xml` di menu Sitemaps.
4. Periksa hasil data terstrukturnya di
   <https://search.google.com/test/rich-results>.

Pengindeksan biasanya butuh beberapa hari sampai satu-dua minggu untuk domain
yang benar-benar baru.

---

## Deploy: GitHub Pages

Situs live: **<https://morvyn.himikolab.my.id>**
Repo: <https://github.com/himiko-lab/morvyn-web>

Setiap `git push` ke `main` otomatis membangun ulang dan menerbitkan situs
lewat `.github/workflows/deploy.yml`. Tidak ada langkah manual. Progresnya bisa
dilihat di tab **Actions**, dan workflow-nya juga bisa dijalankan sendiri lewat
tombol "Run workflow".

Untuk memeriksa hasil build persis seperti yang akan tayang:

```bash
npm run build && python3 -m http.server 4323 --directory out
```

Lalu buka <http://localhost:4323>. Ini menyajikan `out/` sebagai berkas diam,
tanpa server Next, sama seperti yang dilakukan GitHub Pages.

### Empat setelan yang membuatnya jalan

Semuanya di `next.config.ts`, dan semuanya wajib:

| Setelan | Kalau dihapus |
|---|---|
| `output: "export"` | Tidak ada folder `out/`; Pages tidak punya apa pun untuk disajikan. |
| `images: { unoptimized: true }` | Build gagal begitu ada `<Image>`, karena pengoptimal gambar Next butuh server. |
| `trailingSlash: true` | Menghasilkan `out/en.html`, bukan `out/en/index.html`. URL `/en` jadi bergantung pada tebakan server. |
| `touch out/.nojekyll` (di workflow) | Pages menjalankan Jekyll, yang membuang semua folder berawalan garis bawah, termasuk `_next/`, isinya seluruh CSS dan JavaScript situs. |

### Kalau alamatnya berubah

Alamat situs tercatat di **dua** tempat yang harus selalu sama:

1. `public/CNAME`: dibaca GitHub Pages untuk menentukan domainnya
2. `site.url` di `src/content/site.ts`: dipakai untuk canonical URL dan Open Graph

Kalau suatu saat pindah ke project page (`himiko-lab.github.io/morvyn-web`),
hapus `public/CNAME` dan tambahkan `basePath: "/morvyn-web"` di `next.config.ts`.
Tanpa `basePath`, seluruh CSS dan JavaScript akan 404.

### DNS

Satu record di pengelola DNS (domainnya ada di Cloudflare):

| Tipe | Nama | Tujuan | Proxy |
|---|---|---|---|
| CNAME | `morvyn` | `himiko-lab.github.io` | **DNS only** (awan abu-abu) |

Proxy Cloudflare harus dimatikan, setidaknya sampai GitHub selesai menerbitkan
sertifikat HTTPS-nya. Dengan proxy menyala, GitHub tidak bisa memverifikasi
kepemilikan domain dan opsi "Enforce HTTPS" akan tetap terkunci.

**Alamat `himiko-lab.github.io/morvyn-web/` sengaja tidak dipakai dan akan
tampil berantakan**, tanpa gaya sama sekali. Itu bukan kerusakan: situs ini
dibangun tanpa `basePath` karena menargetkan akar subdomain, sehingga seluruh
aset dicari di `/_next/…` sedangkan di alamat itu letaknya
`/morvyn-web/_next/…`. Pakai domainnya, bukan URL github.io.

## Menyesuaikan warna

Semua warna terpusat di blok `@layer base` pada `src/app/globals.css`.

Ketiga warna merek diambil dari `Logo Morvyn (utama).svg` dan ditulis dalam
OKLCH, bukan HEX, supaya campuran warnanya (gradien, `color-mix`) tidak
berlumpur seperti kalau dicampur di ruang sRGB:

| Warna | HEX | OKLCH |
|---|---|---|
| Biru utama | `#078DFB` | `oklch(64.06% 0.1909 252.22)` |
| Ungu sekunder | `#4D61F9` | `oklch(56.99% 0.2254 271.43)` |
| Putih | `#FFFFFF` | - |

### Mengganti logo

Lambangnya ada di **lima** tempat dan kelimanya harus diganti bersamaan:

| Berkas | Perannya |
|---|---|
| `public/logo-morvyn.svg` | Berkas mandiri, dirujuk `Organization.logo` di data terstruktur |
| `src/components/Logo.tsx` | Lambang di header dan footer, ditanam inline |
| `src/components/PhoneFrame.tsx` | Lambang samar di placeholder mockup, tanpa percikan putih |
| `src/app/icon.svg` | Favicon, berlatar putih dan bersudut membulat |
| `design/og-id.svg`, `design/og-en.svg` | Lambang putih di gambar Open Graph |

Berkas Affinity biasanya mengekspor SVG dengan `<g>` bersarang beberapa lapis.
Ratakan dulu jadi satu transform per bentuk di `public/logo-morvyn.svg`, lalu
**buktikan hasilnya identik** sebelum menyebar angkanya ke empat berkas lain:

```bash
rsvg-convert -w 800 -b '#dddddd' "../Logo/Logo Morvyn (2).svg" -o /tmp/asal.png && rsvg-convert -w 800 -b '#dddddd' public/logo-morvyn.svg -o /tmp/rata.png && cmp /tmp/asal.png /tmp/rata.png && echo IDENTIK
```

HeroUI v3 memakai `--accent` sebagai warna merek (di v2 namanya `--primary`),
jadi menimpa satu variabel itu sudah mewarnai seluruh komponennya sekaligus.
Mengubah `--brand-blue` akan memperbarui tombol, badge, ikon, gradien, dan
bayangan dalam sekali jalan.

Ada satu warna yang **sengaja tidak ikut membalik** di mode gelap:
`--device-frame`, yaitu bingkai ponsel pada mockup. Kalau warnanya diambil dari
`--brand-ink` seperti warna teks, bingkainya akan berubah jadi balok putih di
mode gelap.

## Catatan teknis

- **Mode gelap** disimpan di `localStorage` dengan kunci `morvyn-theme`, dan
  saat pertama kali dibuka mengikuti setelan sistem. Skrip kecil di
  `BaseHtml.tsx` menetapkan `data-theme` **sebelum** halaman digambar, supaya
  tidak ada kedipan putih sesaat. Ikon matahari/bulan dipilih lewat CSS, bukan
  state React, jadi ikonnya sudah benar sejak gambar pertama.

- **Dua root layout** (`(id)` dan `(en)`) ada semata-mata supaya atribut `lang`
  pada `<html>` benar di masing-masing bahasa; satu root layout bersama tidak
  bisa melakukannya. Isinya dipusatkan di `BaseHtml.tsx`.

- **Tidak ada pengalihan URL maupun middleware**, jadi situs ini tetap bisa
  diekspor statis. Bahasa Indonesia ada di `/`, Inggris di `/en`.

- **Animasi scroll** memakai `IntersectionObserver` (`Reveal.tsx`). Elemen baru
  disembunyikan setelah komponennya terpasang, bukan sejak render di server,
  sehingga konten tetap terbaca kalau JavaScript gagal dimuat.

- **`prefers-reduced-motion` dihormati**: seluruh animasi dimatikan, dan pita
  sumber berita berubah dari pita berjalan menjadi daftar yang bisa digulir
  tangan.

- **Pita sumber berita** berisi dua daftar dengan isi yang persis sama:
  keduanya dibangun dari array `newsSources` yang sama, jadi menambah atau
  menghapus portal cukup di satu tempat. Kecepatannya diatur lewat
  `--marquee-speed` di `globals.css`.

- **Font** Plus Jakarta Sans dimuat lewat `next/font/google`, jadi ikut
  di-*self-host* saat build, jadi tidak ada permintaan ke server Google saat
  halaman dibuka.

  Catatan buat yang mengubah `globals.css`: token font berada di blok `@theme`
  **biasa**, bukan `@theme inline`. Blok `inline` tidak menerbitkan variabelnya
  ke CSS, sehingga `var(--font-sans)` jadi kosong dan seluruh deklarasi
  `font-family` gugur, lalu situs diam-diam kembali ke font bawaan HeroUI.

- **Ikon** memakai [Phosphor Icons](https://phosphoricons.com) lewat paket
  `@phosphor-icons/react`, diimpor dari titik masuk `/ssr` supaya bisa dipakai
  di Server Component. Tipe `Icon` tidak diekspor dari `/ssr`, jadi diambil
  dari `@phosphor-icons/react/dist/lib/types`.

- **Logo** di `public/logo-morvyn.svg` adalah `Logo Morvyn (utama).svg` dengan
  dua perubahan: dua `<rect>` putih selebar kanvas dibuang supaya logo bisa
  ditaruh di atas latar apa pun (termasuk mode gelap), dan `viewBox` dirapatkan
  ke bentuk logonya supaya tidak ada ruang kosong besar di header.
  `src/app/icon.svg` (favicon) tetap mempertahankan latar putihnya, karena ikon
  tab butuh bidang penuh.

## Kredit

- [HeroUI v3](https://heroui.com): MIT License
- [Phosphor Icons](https://github.com/phosphor-icons/core): MIT License
- [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans):
  SIL Open Font License 1.1

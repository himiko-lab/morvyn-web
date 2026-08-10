# Morvyn — Website Perkenalan Aplikasi

Website dua bahasa untuk aplikasi Morvyn. Next.js 16 (App Router) + Tailwind CSS v4
+ HeroUI v3 + ikon Phosphor.

- `/` — Bahasa Indonesia
- `/en` — English

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
│   ├── (id)/              # root layout <html lang="id"> + halaman "/"
│   └── (en)/en/           # root layout <html lang="en"> + halaman "/en"
├── components/
│   ├── BaseHtml.tsx       # kerangka <html> yang dipakai kedua bahasa
│   ├── SiteContent.tsx    # susunan bagian halaman, satu-satunya tempat urutan diatur
│   ├── Header.tsx         # navigasi, menu ponsel, pengalih bahasa & tema
│   ├── PhoneFrame.tsx     # bingkai ponsel + placeholder screenshot
│   ├── Reveal.tsx         # animasi muncul saat digulir
│   ├── featureIcons.tsx   # peta ikon & warna ketujuh menu
│   └── sections/          # satu berkas per bagian halaman
├── content/
│   ├── types.ts           # bentuk salinan teks
│   ├── id.ts / en.ts      # SELURUH teks situs
│   └── site.ts            # URL Play Store, domain, daftar 27 portal berita
└── public/logo-morvyn.svg
```

Dua aturan yang memudahkan perawatan:

1. **Tidak ada teks yang ditulis langsung di komponen.** Semuanya lewat `content/`.
2. **`id.ts` dan `en.ts` memakai tipe `Dictionary` yang sama.** Kalau satu bahasa
   ketinggalan sebuah kunci, `npm run build` gagal — terjemahan tidak bisa
   diam-diam tertinggal.

---

## Yang masih perlu diisi

### 1. Screenshot aplikasi — **wajib**

Seluruh bingkai ponsel saat ini menampilkan kotak placeholder bergaris
putus-putus. Ada **8 tempat**: satu di hero, tujuh di bagian pembahasan fitur.

Cari semuanya dengan:

```bash
grep -rn "PhoneFrame" src/components
```

Simpan screenshot di `public/screenshots/` lalu tambahkan prop `src`:

```tsx
{/* sebelum */}
<PhoneFrame alt="Catatan — Morvyn" placeholderLabel="Catatan — Morvyn" />

{/* sesudah */}
<PhoneFrame src="/screenshots/catatan.png" alt="Layar Catatan di aplikasi Morvyn" />
```

Rasio yang diharapkan **9:19.5** (mis. 1080×2340, ukuran layar Android umum).
Gunakan PNG atau WebP. Begitu `src` diisi, placeholder-nya hilang sendiri.

### 2. Tautan Google Play — **wajib**

`src/content/site.ts` masih memakai tebakan:

```ts
playStoreUrl: "https://play.google.com/store/apps/details?id=com.himikolab.morvyn",
```

Ganti dengan URL asli dari Play Console. Tautan ini dipakai di lima tempat
(header, menu ponsel, hero, blok CTA, footer) — cukup diubah sekali di sini.

### 3. Alamat email kontak — opsional

`site.contactEmail` sengaja dikosongkan. Selama masih kosong, baris "Kontak"
tidak muncul di footer — bukan tautan mati. Isi kalau sudah ada alamat resmi.

### 4. Halaman Kebijakan Privasi & Ketentuan Layanan — belum ada

Google Play mewajibkan tautan kebijakan privasi. Halamannya belum dibuat, dan
tautannya sengaja tidak dipasang di footer supaya tidak ada tautan yang menuju
halaman kosong. Teksnya sudah tersedia di `dict.footer.privacy` dan
`dict.footer.terms` begitu halamannya siap.

### 5. Angka di bagian statistik — periksa dulu

Tiga angka di bawah hero (`stats` pada `id.ts`/`en.ts`) sengaja hanya berisi
fakta yang bisa diperiksa: **7** fitur, **27** sumber berita, **2** bahasa.
Jumlah unduhan dan rating Play Store TIDAK dicantumkan karena angkanya belum
ada. Kalau nanti mau ditambahkan, ambil dari Play Console — jangan dikarang.

### 6. Dua jawaban FAQ yang perlu Anda pastikan

Isi FAQ disusun dari `REMOTE_CONFIG_MORVYN.md` dan keterangan Anda. Dua hal
berikut belum terkonfirmasi dan sebaiknya diperiksa sebelum tayang:

| Pertanyaan | Yang perlu dipastikan |
|---|---|
| "Morvyn tersedia gratis di Google Play" (blok CTA) | Benarkah gratis sepenuhnya, atau ada pembelian dalam aplikasi? |
| Fitur mana yang jalan tanpa internet | Belum disinggung di FAQ. Layak ditambahkan kalau Catatan/Agenda/Kebiasaan memang bisa offline. |

---

## Deploy — GitHub Pages

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
tanpa server Next — sama seperti yang dilakukan GitHub Pages.

### Empat setelan yang membuatnya jalan

Semuanya di `next.config.ts`, dan semuanya wajib:

| Setelan | Kalau dihapus |
|---|---|
| `output: "export"` | Tidak ada folder `out/`; Pages tidak punya apa pun untuk disajikan. |
| `images: { unoptimized: true }` | Build gagal begitu ada `<Image>`, karena pengoptimal gambar Next butuh server. |
| `trailingSlash: true` | Menghasilkan `out/en.html`, bukan `out/en/index.html`. URL `/en` jadi bergantung pada tebakan server. |
| `touch out/.nojekyll` (di workflow) | Pages menjalankan Jekyll, yang membuang semua folder berawalan garis bawah — termasuk `_next/`, isinya seluruh CSS dan JavaScript situs. |

### Kalau alamatnya berubah

Alamat situs tercatat di **dua** tempat yang harus selalu sama:

1. `public/CNAME` — dibaca GitHub Pages untuk menentukan domainnya
2. `site.url` di `src/content/site.ts` — dipakai untuk canonical URL dan Open Graph

Kalau suatu saat pindah ke project page (`himiko-lab.github.io/morvyn-web`),
hapus `public/CNAME` dan tambahkan `basePath: "/morvyn-web"` di `next.config.ts`
— tanpa `basePath`, seluruh CSS dan JavaScript akan 404.

### DNS

Satu record di pengelola DNS (domainnya ada di Cloudflare):

| Tipe | Nama | Tujuan | Proxy |
|---|---|---|---|
| CNAME | `morvyn` | `himiko-lab.github.io` | **DNS only** (awan abu-abu) |

Proxy Cloudflare harus dimatikan, setidaknya sampai GitHub selesai menerbitkan
sertifikat HTTPS-nya. Dengan proxy menyala, GitHub tidak bisa memverifikasi
kepemilikan domain dan opsi "Enforce HTTPS" akan tetap terkunci.

**Alamat `himiko-lab.github.io/morvyn-web/` sengaja tidak dipakai dan akan
tampil berantakan** — tanpa gaya sama sekali. Itu bukan kerusakan: situs ini
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
| Putih | `#FFFFFF` | — |

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
  pada `<html>` benar di masing-masing bahasa — satu root layout bersama tidak
  bisa melakukannya. Isinya dipusatkan di `BaseHtml.tsx`.

- **Tidak ada pengalihan URL maupun middleware**, jadi situs ini tetap bisa
  diekspor statis. Bahasa Indonesia ada di `/`, Inggris di `/en`.

- **Animasi scroll** memakai `IntersectionObserver` (`Reveal.tsx`). Elemen baru
  disembunyikan setelah komponennya terpasang, bukan sejak render di server —
  sehingga konten tetap terbaca kalau JavaScript gagal dimuat.

- **`prefers-reduced-motion` dihormati**: seluruh animasi dimatikan, dan pita
  sumber berita berubah dari pita berjalan menjadi daftar yang bisa digulir
  tangan.

- **Pita sumber berita** berisi dua daftar dengan isi yang persis sama —
  keduanya dibangun dari array `newsSources` yang sama, jadi menambah atau
  menghapus portal cukup di satu tempat. Kecepatannya diatur lewat
  `--marquee-speed` di `globals.css`.

- **Font** Plus Jakarta Sans dimuat lewat `next/font/google`, jadi ikut
  di-*self-host* saat build — tidak ada permintaan ke server Google saat
  halaman dibuka.

  Catatan buat yang mengubah `globals.css`: token font berada di blok `@theme`
  **biasa**, bukan `@theme inline`. Blok `inline` tidak menerbitkan variabelnya
  ke CSS, sehingga `var(--font-sans)` jadi kosong dan seluruh deklarasi
  `font-family` gugur — situs diam-diam kembali ke font bawaan HeroUI.

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

- [HeroUI v3](https://heroui.com) — MIT License
- [Phosphor Icons](https://github.com/phosphor-icons/core) — MIT License
- [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) —
  SIL Open Font License 1.1

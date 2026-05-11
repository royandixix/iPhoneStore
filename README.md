<div align="center">

# 📱 iStore — iPhone Store Mamuju
### Sistem Informasi Penjualan iPhone
**Mamuju, Sulawesi Barat**

---

*⚠️ Dokumen ini bersifat PRIVAT dan RAHASIA.*  
*Dilarang mendistribusikan, menyalin, atau mempublikasikan tanpa izin tertulis dari pemilik.*

---

</div>

## 📌 Tentang Sistem

Sistem ini adalah aplikasi web internal milik **iPhone Store Mamuju** yang digunakan untuk mengelola penjualan, stok produk, laporan keuangan, dan data pelanggan secara digital.

Sistem dibangun khusus untuk kebutuhan operasional toko dan **tidak ditujukan untuk publik atau open-source**.

---

## 🏪 Informasi Toko

| | |
|---|---|
| **Nama Toko** | iPhone Store Mamuju |
| **Lokasi** | Mamuju, Sulawesi Barat |
| **Jenis Sistem** | Manajemen Penjualan iPhone Internal |

---

## 🔐 Akses Sistem

> ⚠️ **Hanya staff & admin toko yang berwenang mengakses sistem ini.**

| Panel | URL | Hak Akses |
|---|---|---|
| 🏠 Toko (Pelanggan) | `http://[domain]/` | Pelanggan terdaftar |
| 🛠️ Admin | `http://[domain]/admin` | Staff & Pemilik Toko |

**Akun admin hanya dibuat oleh pemilik toko. Dilarang membagikan kredensial kepada pihak luar.**

---

## ✨ Fitur Sistem

### 👤 Sisi Pelanggan

- Login & Register akun pelanggan
- Login via Google
- Lihat & cari produk iPhone
- Detail produk (harga, stok, label)
- Keranjang belanja (pilih ukuran & warna)
- Proses pemesanan & checkout
- Riwayat & status pesanan

### 🛠️ Sisi Admin / Staff Toko

- Dashboard statistik penjualan
- Grafik penjualan bulanan
- Daftar produk terlaris
- Manajemen produk — tambah, edit, hapus, upload foto
- Label produk: `New`, `Promo`, `Best Seller`
- Laporan produk format **PDF** & **Excel**
- Manajemen profil & keamanan akun admin
- Sistem notifikasi internal

---

## ⚙️ Panduan Setup (Teknisi)

> Bagian ini hanya untuk teknisi atau developer yang ditunjuk oleh pemilik toko.

### Kebutuhan Server

- PHP >= 8.1
- Composer
- Node.js >= 18
- MySQL
- Web Server (Apache / Nginx)

---

### Langkah 1 — Salin Project

```bash
git clone [repo-privat] istore-mamuju
cd istore-mamuju
```

---

### Langkah 2 — Install Dependency

```bash
composer install
npm install
```

---

### Langkah 3 — Konfigurasi Environment

```bash
cp .env.example .env
php artisan key:generate
```

Edit file `.env` dan sesuaikan:

```env
# ── Aplikasi ────────────────────────────────────────
APP_NAME="iPhone Store Mamuju"
APP_ENV=production
APP_DEBUG=false
APP_URL=http://[domain-toko]

# ── Database ─────────────────────────────────────────
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=istore_mamuju
DB_USERNAME=[username_db]
DB_PASSWORD=[password_db]

# ── Sesi ─────────────────────────────────────────────
SESSION_DRIVER=database
SESSION_DOMAIN=[domain-toko]

# ── Google OAuth (jika diaktifkan) ───────────────────
GOOGLE_CLIENT_ID=[isi_dari_google_console]
GOOGLE_CLIENT_SECRET=[isi_dari_google_console]
GOOGLE_REDIRECT_URI=http://[domain-toko]/auth/google/callback
```

---

### Langkah 4 — Setup Database

```bash
php artisan migrate
php artisan storage:link
```

---

### Langkah 5 — Build & Jalankan

```bash
# Mode Production
npm run build
php artisan serve
```

---

## 🗄️ Struktur Database

```
users           — Data admin & pelanggan toko
products        — Data produk iPhone & aksesoris
orders          — Data transaksi penjualan
order_items     — Rincian item per transaksi
carts           — Keranjang belanja pelanggan
cart_items      — Item dalam keranjang (size, color, qty)
notifications   — Notifikasi sistem internal
sessions        — Sesi login yang sedang aktif
```

---

## 🔒 Keamanan Sistem

- Akses admin dilindungi middleware role `admin`
- Password disimpan dalam bentuk hash aman (bcrypt)
- Sesi dikelola penuh di sisi server
- Proteksi CSRF aktif di semua form
- Upload file dibatasi: JPG, PNG, GIF — maks 2MB

> **Jika menemukan celah keamanan, segera laporkan kepada pengelola sistem. Jangan disebarluaskan.**

---

## 🐛 Troubleshooting Umum

| Masalah | Solusi |
|---|---|
| Gambar produk tidak muncul | Jalankan `php artisan storage:link` |
| Halaman kosong setelah login | Periksa `SESSION_DOMAIN` di `.env` |
| Error 500 | Aktifkan `APP_DEBUG=true` sementara, cek `storage/logs/laravel.log` |
| Login Google gagal | Periksa konfigurasi Google OAuth di `.env` |
| Data tidak tersimpan | Periksa koneksi database & jalankan `php artisan migrate` |

---

## 📞 Kontak Pengelola Sistem

Untuk keperluan teknis, perbaikan sistem, atau penambahan fitur — hubungi pengelola sistem yang ditunjuk langsung oleh pemilik toko.

---

<div align="center">

*Sistem ini dikembangkan khusus untuk operasional*  
**iPhone Store Mamuju — Sulawesi Barat**

*© 2025 iPhone Store Mamuju. Seluruh hak cipta dilindungi.*  
*Dilarang keras menyalin atau mendistribusikan sistem ini tanpa izin tertulis.*

</div>
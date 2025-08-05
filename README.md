
# Study Case Daftar Akreditasi – Universitas Sumatera Utara

Proyek ini adalah frontend aplikasi berbasis Next.js + Tailwind CSS untuk menampilkan data akreditasi jurusan di Universitas Sumatera Utara. Proyek mendukung fitur pencarian, filter strata, dan pagination responsif (desktop & mobile).



## Tech Stack
Pada proyek ini tech stack yang digunakan adalah sebagai berikut:
- Next.js 15 (App Router)
- Laravel 12
- Tailwind CSS


## Features

- 🔍 Search: Pencarian berdasarkan nama jurusan, kategori, atau instansi.

- 🧪 Filter Strata: Filter program berdasarkan jenjang (D3, S1, S2, dll).

- 📄 Pagination:

    - Desktop/Tablet: Tombol paginasi numerik.

    - Mobile: Dropdown select untuk memilih halaman.

- 📊 Data yang ditampilkan:

    Nama Jurusan, Tingkat Akreditasi, Tahun Perolehan, Jenis Akreditasi, Strata, Fakultas, Gambar sertifikat
## Project Structure
    /StudyCase
    │
    ├── backend/          # Laravel 12 project
    │   └── app/
        │   └── Http/
            │   └── Controllers/
                │   └── Api/
                    │   └── AkreditasiController.php    # untuk handling api akreditasi
                    │   └── MasterDataController.php    # untuk handling api tabel umum
            │   └── Models/
                │   └── DaftarAkreditasi.php
                │   └── Fakultas.php
                │   └── JenisAkreditasi.php
                │   └── Jurusan.php
                │   └── Strata.php
            │   └── Routes/
                │   └── RouteServiceProvider.php        # untuk route API
    │   └── routes/
    │   └── database/
        │   └── migrations/     # untuk table yang digunakan pada proyek
        │   └── seeders/        # untuk seeders
    │   └── routes/
        │   └── api.php         # rute untuk endpoint api
    │
    └── frontend/           # Next.js 15 project
        └── public/
            └── assets/
                └── icons/ 
                └── images/ 
        └── src/
            └── app/
                └── globals.css
                └── layout.tsx
                └── page.tsx
            └── components/
                └── layouts/
                    └── header.tsx
                └── ui/
                    └── AkreditasiCard.tsx
                    └── FilterCard.tsx
                    └── Pagination.tsx
                    └── StrataFilter.tsx
            └── lib/
                └── api.ts      # untuk menyimpan fungsi pemanggilan api
## ⚙️ Instalasi & Menjalankan Proyek

### 1. Laravel 12 (Backend)

```bash
cd backend

# Install dependency
composer install

# Setup file env
cp .env.example .env

# Generate app key
php artisan key:generate

# Setup database
php artisan migrate --seed

# Jalankan server
php artisan serve
```

### 2. Next JS 15 (frontend)

```bash
cd frontend

# Install dependency
npm install

# Setup file env
cp .env.example .env

# Jalankan development server
npm run dev

# Buka di browser
http://localhost:3000

```
    
# Student Management — React UI Implementation Practice

Aplikasi ReactJS sederhana untuk tugas Frontend Development. Tidak menggunakan backend atau database.

## Cara menjalankan

Pastikan Node.js sudah terpasang. Buka terminal di folder project, lalu jalankan:

```bash
npm install
npm run dev
```

Buka alamat lokal yang ditampilkan Vite (biasanya `http://localhost:5173`).

## Build production

```bash
npm run build
```

## Checklist tugas

- [x] Header **Student Management** dan subheader **Daftar Data Mahasiswa**
- [x] Minimal 5 data dummy mahasiswa dalam **array of objects**
- [x] Menyimpan daftar mahasiswa dalam **useState**
- [x] Menampilkan mahasiswa dalam tabel 7 kolom melalui **.map()** dan `key` unik (NIM)
- [x] Menggunakan **useState** untuk waktu saat ini
- [x] Menggunakan **useEffect**, `setInterval` (1000 ms), dan `clearInterval` cleanup
- [x] Menampilkan jumlah mahasiswa dan jam digital live
- [x] Styling dengan Vanilla CSS responsif

## Struktur

- `src/App.jsx`: data dummy, state, interval jam, dan komponen UI
- `src/style.css`: seluruh styling dashboard
- `src/main.jsx`: entry point React

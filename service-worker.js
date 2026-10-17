// Service worker minimal - fungsinya cuma supaya Chrome menganggap halaman
// ini "installable" sebagai app (bukan cuma pintasan/bookmark). Tidak ada
// caching khusus karena app ini memang butuh koneksi internet tiap kali
// dipakai (simpan data & ambil daftar batch Extruder dari spreadsheet).

self.addEventListener('install', function (e) {
  self.skipWaiting();
});

self.addEventListener('activate', function (e) {
  self.clients.claim();
});

self.addEventListener('fetch', function (e) {
  e.respondWith(fetch(e.request));
});

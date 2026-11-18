/* Pasang logo STP: favicon, ikon layar utama (PWA), dan logo di header.
   Pemakaian: <script src="logo.js"></script> di dalam <head> maintenance.html */
(function () {
  const BASE = './';

  function tambahLink(rel, href, sizes, type) {
    const l = document.createElement('link');
    l.rel = rel;
    l.href = BASE + href;
    if (sizes) l.sizes = sizes;
    if (type) l.type = type;
    document.head.appendChild(l);
  }

  // Manifest (untuk install ke layar utama HP)
  tambahLink('manifest', 'manifest.json');

  // Favicon browser
  tambahLink('icon', 'logo-favicon.png', '32x32', 'image/png');

  // Ikon layar utama iPhone/Android
  tambahLink('apple-touch-icon', 'logo-192.png', '192x192');

  // Warna bar browser di HP
  const tema = document.createElement('meta');
  tema.name = 'theme-color';
  tema.content = '#1D4E89';
  document.head.appendChild(tema);

  // Logo kecil di header, di depan judul
  document.addEventListener('DOMContentLoaded', function () {
    const h1 = document.querySelector('h1');
    if (!h1 || h1.querySelector('img.logo-stp')) return;
    const img = document.createElement('img');
    img.src = BASE + 'logo-192.png';
    img.alt = 'Logo STP';
    img.className = 'logo-stp';
    img.style.cssText = 'height:36px;width:36px;vertical-align:middle;margin-right:8px;border-radius:50%;background:#fff';
    h1.prepend(img);
  });
})();

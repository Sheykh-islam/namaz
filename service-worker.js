self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('pwa-v2').then(cache => {
      return cache.addAll([
        './',
        './index.html',
'/namaz/icon-192.png'',
        // Добавь сюда важные ресурсы, например, CSS, логотипы и т.д.
      ]);
    })
  );
  self.skipWaiting();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

self.addEventListener('install', e => {
  e.waitUntil(caches.open('static').then(cache => cache.addAll([
    '/', '/index.html', '/css/styles.css', '/js/main.js'
  ])));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});

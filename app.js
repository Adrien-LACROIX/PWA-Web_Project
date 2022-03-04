self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open('_HotHotHot_').then((cache) => cache.addAll([
            '/PWA-Web_Project/',
            '/PWA-Web_Project/index.html',
            '/PWA-Web_Project/public/css/indexStyle.css',
            '/PWA-Web_Project/templates/acceuil.html',
        ])),
    );
});

self.addEventListener('fetch', (e) => {
    console.log(e.request.url);
    e.respondWith(
        caches.match(e.request).then((response) => response || fetch(e.request)),
    );
});
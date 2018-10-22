const cacheName = 'v2';
const cacheAsset = [
    'index.html',
    'about.html',
    'services.html',
    'maxence.html',
    '/src/css/style.css',
    '/src/js/app.js',
    '/src/js/jQuery.js',
];

self.addEventListener('install', e => {
    console.log('Service Worker Installed');

    e.waitUntil(
        caches
            .open(cacheName)
            .then(cache => {
                console.log('Service Worker: Caching Files');
                cache.addAll(cacheAsset);
            })
            .then(() => self.skipWaiting())
    );
})

self.addEventListener('activate', e => {
    console.log('Service Worker activated');

    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== cacheName) {
                        console.log('Service Worker: Clearing Old Cache');
                        return caches.delete(cache);
                    }
                })
            )
        })
    )
})

self.addEventListener('fetch', e => {
    console.log('Service Worker: Fetching');
    e.respondWith(
        fetch
    )
})
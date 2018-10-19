const cacheName = 'v1';
const cacheAsset = [
    'index.html',
    'about.html',
    'services.html',
    'maxence.html',
    '/src/css/style.css',
    '/src/js/app.js',
    '/src/js/jQuery.js',
    'src/Video/Lego.mov',
    'src/Video/Lego.mp4',
    'src/Video/Lego.ogv',
    'src/Video/Lego.webm'
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
    console.log('Service Worker activated')
})
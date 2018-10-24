importScripts('sw-toolbox.js')
toolbox.precache(['index.html', 'dist/css/style.css'])

toolbox.router.get('/*', toolbox.networkFirst, {
networkTimeoutSeconds: 10})
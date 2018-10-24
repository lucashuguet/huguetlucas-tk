importScripts('sw-toolbox.js')
toolbox.precache(['index.html', 'dist/css/style.css', 'dist/buddle.js'])

toolbox.router.get('/*', toolbox.networkFirst, {
networkTimeoutSeconds: 15})
import $ from './jQuery'

$('.m-nav-toggle').click(function(e){
    e.preventDefault()
    $('.m-right').toggleClass('is-open');
    $('.m-nav-toggle').toggleClass('is-open');
})

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('./sw.js')
            .then(reg => console.log('Service Worker regestered'))
            .catch(err => console.log(`Service Worker : error : ${err}`))
    })
}
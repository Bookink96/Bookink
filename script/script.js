console.log('aqui llega 0')

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    speed: 2000,
    autoplay: {
        delay: 2000,
        pauseOnMauseEnter: true,
    },
});

console.log('aqui llega 1')

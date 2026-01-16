/* Splash Screen - On l'enlève quand la page est chargée */
window.addEventListener('load', () => {
    const loaderLine = document.querySelector('.loader-line');
    const splash = document.getElementById('splash');

    if (loaderLine) loaderLine.style.width = '100%';

    setTimeout(() => {
        if (splash) {
            splash.style.opacity = '0';
            splash.style.transition = 'opacity 0.8s ease';
            setTimeout(() => {
                splash.remove();
                document.body.style.overflow = 'auto';
            }, 800);
        }
    }, 1500);
});

/* Tilt Effect - Avec sécurité pour ne pas bloquer le site */
window.addEventListener('mousemove', (e) => {
    const card = document.querySelector('.image-card');
    if (card) {
        let x = (window.innerWidth / 2 - e.pageX) / 40;
        let y = (window.innerHeight / 2 - e.pageY) / 40;
        card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    }
});

window.addEventListener('mouseleave', () => {
    const card = document.querySelector('.image-card');
    if (card) {
        card.style.transform = `rotateY(0deg) rotateX(0deg)`;
        card.style.transition = '0.5s';
    }
});
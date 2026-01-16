const removeSplash = () => {
    const splash = document.getElementById('splash');
    const loaderLine = document.querySelector('.loader-line');

    if (loaderLine) loaderLine.style.width = '100%';

    setTimeout(() => {
        if (splash) {
            splash.style.transform = 'translateY(-100%)';
            splash.style.transition = 'transform 1s cubic-bezier(0.77, 0, 0.175, 1)';
            setTimeout(() => {
                splash.remove();
                document.body.style.overflow = 'auto';
            }, 1000);
            // À ajouter dans le setTimeout du removeSplash juste après splash.remove()
const heroElements = document.querySelectorAll('.hero-text > *');
heroElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `all 0.8s cubic-bezier(0.2, 1, 0.3, 1) ${index * 0.2}s`;
    
    // On déclenche l'animation
    setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
    }, 100);
});
        }
    }, 2000); 
};

window.addEventListener('load', removeSplash);

// Effet de mouvement sur l'image (Tilt)
window.addEventListener('mousemove', (e) => {
    const card = document.querySelector('.image-card');
    if (card && window.innerWidth > 900) {
        let x = (window.innerWidth / 2 - e.pageX) / 35;
        let y = (window.innerHeight / 2 - e.pageY) / 35;
        card.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
    }
});
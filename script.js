/* --- 1. GESTION DU SPLASH SCREEN (PRIORITAIRE) --- */
const removeSplash = () => {
    const splash = document.getElementById('splash');
    const loaderLine = document.querySelector('.loader-line');

    if (loaderLine) loaderLine.style.width = '100%';

    setTimeout(() => {
        if (splash) {
            splash.style.opacity = '0';
            splash.style.transition = 'opacity 0.8s ease';
            setTimeout(() => {
                splash.remove();
                document.body.style.overflow = 'auto'; // Réactive le scroll
            }, 800);
        }
    }, 1500); // Le site s'ouvre après 1.5s quoi qu'il arrive
};

// On lance au chargement
window.addEventListener('load', removeSplash);

/* --- 2. EFFET TILT (DYNAMIQUE) --- */
// On écoute le mouvement de souris sur toute la fenêtre
window.addEventListener('mousemove', (e) => {
    const card = document.querySelector('.image-card');
    // On vérifie que "card" existe AVANT de faire des calculs
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
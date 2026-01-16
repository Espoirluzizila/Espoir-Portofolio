/* --- GESTION DU SPLASH SCREEN --- */
const setupSplash = () => {
    const splash = document.getElementById('splash');
    const loaderLine = document.querySelector('.loader-line');

    // 1. On lance l'animation de la barre immédiatement
    if (loaderLine) {
        loaderLine.style.width = '100%';
    }

    // 2. On définit une durée stricte de 2 secondes avant de cacher le splash
    setTimeout(() => {
        if (splash) {
            splash.style.opacity = '0';
            splash.style.transition = 'opacity 0.8s ease';
            
            // 3. On supprime l'élément du DOM après l'animation de sortie
            setTimeout(() => {
                splash.remove();
                document.body.style.overflow = 'auto'; // Réactive le défilement
            }, 800);
        }
    }, 2000); // DURÉE DU SPLASH : 2000ms = 2 secondes
};

// On lance la fonction dès que la fenêtre est prête
window.addEventListener('load', setupSplash);


/* --- EFFET TILT (IMAGE 3D) --- */
// On met une sécurité "if (card)" pour que ça ne bloque pas le site si l'image manque
window.addEventListener('mousemove', (e) => {
    const card = document.querySelector('.image-card');
    if (card) {
        let x = (window.innerWidth / 2 - e.pageX) / 40;
        let y = (window.innerHeight / 2 - e.pageY) / 40;
        card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    }
});
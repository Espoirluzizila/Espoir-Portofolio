/* --- GESTION DU SPLASH SCREEN (Priorité n°1) --- */
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
                document.body.style.overflow = 'auto'; // Réactive le défilement
            }, 800);
        }
    }, 1500); 
};

// On lance dès que la page est chargée
window.addEventListener('load', removeSplash);

// Sécurité : Si après 4 secondes c'est toujours bloqué, on l'enlève de force
setTimeout(removeSplash, 4000);

/* --- EFFET TILT (Sécurisé) --- */
window.addEventListener('mousemove', (e) => {
    const card = document.querySelector('.image-card');
    // On vérifie que "card" existe bien avant de faire des calculs
    if (card) {
        let x = (window.innerWidth / 2 - e.pageX) / 40;
        let y = (window.innerHeight / 2 - e.pageY) / 40;
        card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    }
});
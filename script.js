/* Splash */
window.addEventListener('load', () => {
    document.querySelector('.loader-line').style.width = '100%';
    setTimeout(() => {
        document.getElementById('splash').style.opacity = '0';
        setTimeout(() => document.getElementById('splash').remove(), 1000);
    }, 2000);
});

/* Tilt Effect */
const card = document.querySelector('.image-card');
window.addEventListener('mousemove', (e) => {
    let x = (window.innerWidth / 2 - e.pageX) / 40;
    let y = (window.innerHeight / 2 - e.pageY) / 40;
    card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

window.addEventListener('mouseleave', () => {
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    card.style.transition = '0.5s';
});
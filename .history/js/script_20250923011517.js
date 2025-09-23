// JS para o menu toggler responsivo

document.addEventListener('DOMContentLoaded', function() {
    const toggler = document.getElementById('menuToggler');
    const nav = document.querySelector('.main-nav');

    if (toggler && nav) {
        toggler.addEventListener('click', function() {
            toggler.classList.toggle('open');
            nav.classList.toggle('nav-open');
        });
    }

    // Fecha o menu ao clicar em um link (opcional, melhora UX mobile)
    nav?.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 900) {
                toggler.classList.remove('open');
                nav.classList.remove('nav-open');
            }
        });
    });
});

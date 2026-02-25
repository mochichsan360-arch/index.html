// Mengatur menu navigasi di mode Mobile
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    // Toggle Nav
    navLinks.classList.toggle('nav-active');

    // Animasi Hamburger Menu (Opsional)
    hamburger.classList.toggle('toggle');
});

// Update tahun secara otomatis di footer
document.getElementById('year').textContent = new Date().getFullYear();

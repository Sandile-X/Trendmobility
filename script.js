// JavaScript to shrink navbar on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
});

document.getElementById('menu-icon').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
});


// JavaScript for Hero Image Slideshow
const heroSection = document.getElementById('hero');
const images = [
    'p/chainway1.jpg', // Update these paths as per your local file structure
    'p/zprint.jpg',
];
let currentIndex = 0;

function changeHeroImage() {
    currentIndex = (currentIndex + 1) % images.length;
    heroSection.style.backgroundImage = `url(${images[currentIndex]})`;
    heroSection.classList.add('fade'); // Apply fade effect
    setTimeout(() => {
        heroSection.classList.remove('fade'); // Remove fade effect after animation
    }, 1000); // Adjust this time to match the fade animation duration
}

// Change image every 5 seconds
setInterval(changeHeroImage, 5000);

// Initial image setup
heroSection.style.backgroundImage = `url(${images[0]})`;



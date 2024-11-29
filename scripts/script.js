document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;
    const slides = document.querySelectorAll('.blocktext1');
    const totalSlides = slides.length;
    let interval;

    function showSlide(index) {
        currentIndex = index;
        slider.style.transform = `translateX(-${currentIndex * 50}%)`;
        updateDots();
        resetInterval();
    }

    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    function resetInterval() {
        clearInterval(interval);
        interval = setInterval(showNextSlide, 3000);
    }

    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            showSlide(index);
        });
    });

    updateDots();
    resetInterval(); 
});

let menu = document.querySelector("header ul");
let menuToggle = document.querySelector(".menu-toggle");

menuToggle.addEventListener("click", function(e) {
    e.preventDefault();
    menu.classList.toggle("show-menu");
    menuToggle.classList.toggle("activeline");
});

window.addEventListener('resize', function() {
    if (window.innerWidth > 720 && menu.classList.contains('show-menu')) {
        menu.classList.remove('show-menu');
        menuToggle.classList.remove("activeline");
    }
});
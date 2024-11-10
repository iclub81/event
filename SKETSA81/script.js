let currentSlide = 0;
const slides = document.querySelectorAll(".slider-image");

function moveSlide(direction) {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
}

// Inisialisasi tampilan slide pertama
slides[currentSlide].classList.add("active");
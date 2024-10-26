let slideIndex = 1;

document.addEventListener("DOMContentLoaded", function() {
    showSlides(slideIndex);
    setArrowColor();
});

function setArrowColor() {
    const currentSlide = document.querySelector('.slide:not([style*="display: none"])');
    if (currentSlide) {
        const img = currentSlide.querySelector('img');
        const prevArrow = document.querySelector('.prev');
        const nextArrow = document.querySelector('.next');

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;

        // Draw image and get pixel data
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        const pixelData = ctx.getImageData(0, 0, 1, 1).data;
        const brightness = (0.299 * pixelData[0] + 0.587 * pixelData[1] + 0.114 * pixelData[2]) / 255;

        if (brightness > 0.5) {
            prevArrow.style.color = '#333';
            nextArrow.style.color = '#333';
        } else {
            prevArrow.style.color = '#fff';
            nextArrow.style.color = '#fff';
        }
    }
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    let bullets = document.getElementsByClassName("bullet");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < bullets.length; i++) {
        bullets[i].className = bullets[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "flex"; // Display the slide
    bullets[slideIndex - 1].className += " active"; // Highlight the active bullet
}

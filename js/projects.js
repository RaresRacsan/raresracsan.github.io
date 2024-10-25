let slideIndex = 1;
showSlides(slideIndex);

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

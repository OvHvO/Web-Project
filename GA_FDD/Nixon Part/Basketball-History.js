window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("Title-box").style.padding = "20px 10px";
    document.getElementById("text").style.fontSize = "25px";
  } else {
    document.getElementById("Title-box").style.padding = "40px 10px";
    document.getElementById("text").style.fontSize = "35px";
  }
}

//---------- Slideshow----------//
document.addEventListener("DOMContentLoaded", () => {
    let slideIndex = 1; // Initialize the slide index
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("Slide");
        let dots = document.getElementsByClassName("dot");

        if (slides.length === 0) {
            console.error("No elements with class 'Slide' found.");
            return;
        }

        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

    // Attach functions to the buttons
    document.querySelector(".prev").onclick = () => plusSlides(-1);
    document.querySelector(".next").onclick = () => plusSlides(1);

    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, index) => {
        dot.onclick = () => currentSlide(index + 1);
    });
});
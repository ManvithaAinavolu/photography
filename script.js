var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
document.addEventListener("DOMContentLoaded", function() {
  let slideIndex = 0;
  showSlides();

  function showSlides() {
    let slides = document.querySelectorAll('.slide');
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 5 seconds
  }
});
document.addEventListener("DOMContentLoaded", function() {
  const scrollContainer = document.getElementById('scroll-container');
  const images = document.querySelectorAll('.scroll-container img');
  
  scrollContainer.addEventListener('scroll', function() {
    const lastImage = images[images.length - 1];
    const containerWidth = scrollContainer.offsetWidth;
    const containerScrollLeft = scrollContainer.scrollLeft;
    const lastImageRight = lastImage.offsetLeft + lastImage.offsetWidth;

    if (containerScrollLeft + containerWidth >= lastImageRight) {
      scrollContainer.prepend(...images); // Move images to the beginning
    }
  });
});

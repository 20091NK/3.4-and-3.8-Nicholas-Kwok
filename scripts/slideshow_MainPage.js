var slideIndexA = 1;
showSlides(slideIndexA);

function changeSlide(n) {
  showSlides(slideIndexA += n);
}

function currentSlide(n) {
  showSlides(slideIndexA = n);
}

function showSlides(n) {
  let i;
  let x = document.getElementsByClassName("SlidesA");
  let y = document.getElementsByClassName("BadgeA");
  if (n > x.length) { slideIndexA = 1 }
  if (n < 1) { slideIndexA = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < x.length; i++) {
    y[i].className = y[i].className.replace(" w3-white", "");
  }

  x[slideIndexA - 1].style.display = "block";
  y[slideIndexA - 1].className += " w3-white";
}
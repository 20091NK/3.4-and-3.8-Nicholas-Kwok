var slideIndexA = 0;
showSlides()


function showSlides() {
  let i;
  let x = document.getElementsByClassName("SlidesA");

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  slideIndexA++;
  if (slideIndexA > x.length) { slideIndexA = 1 }
  x[slideIndexA - 1].style.display = "block";

  setTimeout(showSlides, 5000);
}
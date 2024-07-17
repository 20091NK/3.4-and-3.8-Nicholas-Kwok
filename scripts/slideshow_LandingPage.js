var slideIndexAuto = 0;
showSlides()


function showSlides() {
  let i;
  let x = document.getElementsByClassName("slideAuto");

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  
  slideIndexAuto++;
  if (slideIndexAuto > x.length) {slideIndexAuto=1}
  x[slideIndexAuto - 1].style.display = "block";

  setTimeout(showSlides, 5000);
}
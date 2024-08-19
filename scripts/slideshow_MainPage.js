var slideIndexA = 1;
var slideIndexB = 1;

showSlidesA(slideIndexA);
showSlidesB(slideIndexB);

function changeSlideA(n) {
  showSlidesA(slideIndexA += n);
}

function currentSlideA(n) {
  showSlidesA(slideIndexA = n);
}

function changeSlideB(n) {
  //showSlidesB(slideIndexB += n);
}

function currentSlideB(n) {
  //showSlidesB(slideIndexB = n);
  document.getElementById("mapoverlay-modal").style.display = "block";
}

function showSlidesA(n) {
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

function showSlidesB(n) {
  let i;
  let x = document.getElementsByClassName("SlidesB");
  if (n > x.length) { slideIndexB = 1 }
  if (n < 1) { slideIndexB = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  x[slideIndexB - 1].style.display = "block";
}
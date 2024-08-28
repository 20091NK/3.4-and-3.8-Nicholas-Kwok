var slideIndexA = 1;
var slideIndexB = 1;

const slideInfoB = ["A Block", "B Block", "C Block", "D Block", "E Block", "F Block", "G Block", "L Block", "M Block", "P Block", "S Block", "V Block", "W Block", "SLC", "Gym", "Student Office", "Assembly Hall", "Library", "Canteen", "Resource Center", "Pavilion", "Admin & Visitors"];
const slideDescB = ["Science", "Science, Social Studies and Digital Technology", "English, Digital Technology and Commerce (Currently Unavailable)", "Languages", "Drama", "Maori", "Art and DVCO", "Deans", "Music", "Maths", "Drama", "Maths and English", "Physical Technology", "SLC", "Gym", "Student Office", "Assembly Hall", "Library", "Canteen", "Resource Center", "Pavilion", "Admin & Visitors"];
const slideSkyB = ["sky1", "sky2", "sky3", "sky4", "sky5", "sky6", "sky7", "sky8", "sky9", "sky10", "sky11", "sky12", "sky13", "sky14", "sky15", "sky16", "sky17", "sky18", "sky19", "sky20", "sky21", "sky22"];
const slideImgB = ["imgA", "imgB", "imgC", "imgD", "imgE", "imgF", "imgG", "imgL", "imgM", "imgP", "imgS", "imgV", "imgW", "ingSLC", "imgGym", "imgSO", "imgHall", "imgLib", "imgCan", "imgRC", "imgPav", "imgAdm"];

showSlidesA(slideIndexA);
showSlidesB(slideIndexB);

function changeSlideA(n) {
  showSlidesA(slideIndexA += n);
}

function currentSlideA(n) {
  showSlidesA(slideIndexA = n);
}

function changeSlideB(n) {
  showSlidesB(slideIndexB += n);
  document.getElementById("mapoverlay-modal").style.display = "block";
}

function currentSlideB(n) {
  showSlidesB(slideIndexB = n);
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
    y[i].className = y[i].className.replace(" w3-white", "");
  }

  x[slideIndexA - 1].style.display = "block";
  y[slideIndexA - 1].className += " w3-white";
}

function showSlidesB(n) {
  let i;
  let a = slideInfoB;
  let b = document.getElementsByClassName("scene-sky");
  let c = slideDescB;
  let d = slideImgB;

  if (n > b.length) { slideIndexB = 1 }
  if (n < 1) { slideIndexB = b.length }

  for (i = 0; i < b.length; i++) {
    b[i].setAttribute('opacity', '0');
  }

  document.getElementById("mo-text").innerHTML = "<strong>" + a[slideIndexB-1] + "</strong>";
  document.getElementById("mo-desc").innerHTML = "<strong>" + c[slideIndexB-1] + "</strong>";
  //document.getElementById("mo-img").src = "images/MapOverlayImages"= + d[slideIndexB-1] + ".png";
  b[slideIndexB - 1].setAttribute('opacity', '1');

  console.log("This is working! " + b[slideIndexB - 1].id + " " + c[slideIndexB - 1]);
}
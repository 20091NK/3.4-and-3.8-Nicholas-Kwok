let map = document.getElementById("map-overlay");
let scene = document.getElementById("scene-overlay");
let modal = document.getElementById("mapoverlay-modal");
showOverlay()


function hideOverlay() {
  map.style.display = "none";
  modal.style.display = "none";
  scene.style.display = "block";
}

function showOverlay() {
  map.style.display = "block";
  scene.style.display = "none";
}
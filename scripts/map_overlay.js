let map = document.getElementById("map-overlay");
let scene = document.getElementById("scene-overlay");
showOverlay()


function hideOverlay() {
  map.style.display = "none";
  scene.style.display = "block";
}

function showOverlay() {
  map.style.display = "block";
  scene.style.display = "none";
}

// ===== SHOW SCENE =====
function showScene(id) {
  const home = document.getElementById("home");
  const target = document.getElementById(id);

  // Fade out home
  home.style.opacity = 0;

  // Fade out all scenes
  document.querySelectorAll(".scene").forEach(scene => {
    scene.style.opacity = 0;
  });

  setTimeout(() => {
    // Hide home
    home.style.display = "none";

    // Hide all scenes
    document.querySelectorAll(".scene").forEach(scene => {
      scene.style.display = "none";
    });

    // Show target scene
    target.style.display = "block";

    // Force reflow (important for smooth animation)
    target.offsetHeight;

    // Fade in
    target.style.opacity = 1;

  }, 250);
}


// ===== GO BACK HOME =====
window.goHome = function() {
  const home = document.getElementById("home");

  // Fade out all scenes
  document.querySelectorAll(".scene").forEach(scene => {
    scene.style.opacity = 0;
  });

  setTimeout(() => {
    // Hide scenes
    document.querySelectorAll(".scene").forEach(scene => {
      scene.style.display = "none";
    });

    // Show home
    home.style.display = "flex";

    // Force reflow
    home.offsetHeight;

    // Fade in
    home.style.opacity = 1;

  }, 250);
}
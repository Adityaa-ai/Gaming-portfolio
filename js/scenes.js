
// ===== SHOW SCENE =====
// ===== SHOW SCENE (PRO VERSION) =====
function showScene(id) {
  const home = document.getElementById("home");
  const target = document.getElementById(id);

  // Fade out everything
  document.querySelectorAll("#home, .scene").forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(10px)";
  });

  setTimeout(() => {
    // Hide all
    document.querySelectorAll("#home, .scene").forEach(el => {
      el.style.display = "none";
    });

    // Show target
    target.style.display = "block";

    // Reset animation state
    target.style.transform = "translateY(10px)";
    target.style.opacity = 0;

    // Smooth enter animation
    requestAnimationFrame(() => {
      target.style.opacity = 1;
      target.style.transform = "translateY(0)";
    });

  }, 250);
}


// ===== GO BACK HOME =====
window.goHome = function() {
  const home = document.getElementById("home");


  document.querySelectorAll(".scene").forEach(scene => {
    scene.style.opacity = 0;
    scene.style.transform = "translateY(10px)";
  });


  setTimeout(() => {
    
    document.querySelectorAll(".scene").forEach(scene => {
      scene.style.display = "none";
    });


    home.style.display = "flex";

    requestAnimationFrame(() => {
      home.style.opacity = 1;
      home.style.transform = "translateY(0)";
    });

  }, 250);
}
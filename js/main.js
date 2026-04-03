
// ===== GLOBAL STATE =====
let currentProject = null;


// ===== INIT =====
window.onload = () => {
  updateUI();
  showAchievement("Welcome Recruiter 👋");

  attachEvents();
  setupSkillClicks();
};


// ===== EVENT BINDING =====
function attachEvents() {

  document.getElementById("enter-game").addEventListener("click", () => {
    showScene("projects");
    renderProjects();
    showAchievement("Entering Game 🎮");
  });

  document.getElementById("enter-project").onclick = () => {
    showScene("project-view");
  };

  document.getElementById("complete-btn").onclick = () => {
    if (currentProject) {
      addXP(currentProject.xpComplete);
      showAchievement("Mission Completed 🏆");
    }
  };
}


// ===== RENDER PROJECTS =====
function renderProjects() {
  const container = document.getElementById("project-list");
  container.innerHTML = "";

  projects.forEach(p => {
    const div = document.createElement("div");
    div.classList.add("card");

    div.innerHTML = `
      <h3>${p.name}</h3>
      <p>XP Reward: +${p.xpComplete}</p>
      <button onclick="openPreview(${p.id})">View Mission</button>
    `;

    container.appendChild(div);
  });
}


// ===== PREVIEW =====
window.openPreview = function(id) {
  const project = projects.find(p => p.id === id);
  currentProject = project;

  addXP(project.xpOpen);
  showAchievement("Mission Discovered 🎯");

  showScene("preview");

  document.getElementById("preview-title").innerText = project.name;
  document.getElementById("preview-tech").innerText = "Tech: " + project.tech;
  document.getElementById("preview-desc").innerText = project.desc;
};


// ===== PROJECT VIEW =====
function loadProjectDemo(project) {
  const demo = document.getElementById("project-demo");

  if (project.name === "Chat App") {
    demo.innerHTML = `
      <input placeholder="Type message..." />
      <button>Send</button>
    `;
  } else {
    demo.innerHTML = `
      <p>Restaurant Menu Preview</p>
      <button>Order Now</button>
    `;
  }
}


// When entering project
document.getElementById("enter-project").addEventListener("click", () => {
  if (currentProject) {
    showScene("project-view");
    loadProjectDemo(currentProject);
  }
});


// ===== SKILLS =====
function setupSkillClicks() {
  document.querySelectorAll(".skill").forEach(skill => {
    skill.addEventListener("click", () => {
      if (skill.classList.contains("locked")) {
        showAchievement("Skill Locked 🔒");
      } else {
        showAchievement(skill.innerText + " Mastered 💪");
      }
    });
  });
}


// ===== ACHIEVEMENTS =====
function showAchievement(text) {
  const box = document.getElementById("achievement");
  const textEl = document.getElementById("achievement-text");

  textEl.innerText = text;
  box.style.display = "block";

  setTimeout(() => {
    box.style.display = "none";
  }, 2000);
}
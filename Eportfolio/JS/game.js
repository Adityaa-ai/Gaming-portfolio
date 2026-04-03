
// ===== LOAD GAME STATE =====
let game = JSON.parse(localStorage.getItem("game")) || {
  xp: 0,
  level: 1
};


// ===== CONSTANTS =====
const XP_PER_LEVEL = 100;


// ===== ADD XP =====
function addXP(amount) {
  game.xp += amount;

  // Handle multiple level-ups
  while (game.xp >= XP_PER_LEVEL) {
    game.xp -= XP_PER_LEVEL;
    game.level++;

    showAchievement("Level Up! 🚀");
    playSound("assets/sounds/levelup.mp3");
  }

  saveGame();
  updateUI();
}


// ===== SAVE =====
function saveGame() {
  localStorage.setItem("game", JSON.stringify(game));
}


// ===== UPDATE UI =====
function updateUI() {
  const xpEl = document.getElementById("xp");
  const levelEl = document.getElementById("level");
  const fill = document.getElementById("xp-fill");

  if (!xpEl || !levelEl || !fill) return;

  xpEl.innerText = game.xp;
  levelEl.innerText = game.level;

  let percent = (game.xp / XP_PER_LEVEL) * 100;
  fill.style.width = percent + "%";
}


// ===== RESET (DEV TOOL - OPTIONAL) =====
function resetGame() {
  localStorage.removeItem("game");
  game = { xp: 0, level: 1 };
  updateUI();
}
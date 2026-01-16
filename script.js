// Heart Sparkles
const sparkleContainer = document.getElementById("sparkles");
const colors = ["#ff4d6d", "#ffb703", "#ffafcc", "#ffd166", "#cdb4db"];

function createSparkle() {
  const sparkle = document.createElement("span");
  sparkle.innerHTML = "❤";
  sparkle.style.left = Math.random() * 100 + "vw";
  sparkle.style.top = Math.random() * 100 + "vh";
  sparkle.style.color = colors[Math.floor(Math.random() * colors.length)];
  sparkle.style.animationDuration = 2 + Math.random() * 3 + "s";

  sparkleContainer.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 5000);
}

setInterval(createSparkle, 300);

// Tree heart leaves
const leaves = document.querySelector(".leaves");

for (let i = 0; i < 25; i++) {
  const leaf = document.createElement("span");
  leaf.innerHTML = "❤";
  leaf.style.position = "absolute";
  leaf.style.left = Math.random() * 180 + "px";
  leaf.style.top = Math.random() * 180 + "px";
  leaf.style.color = colors[Math.floor(Math.random() * colors.length)];
  leaf.style.fontSize = 20 + Math.random() * 15 + "px";
  leaf.style.animation = "glow 3s infinite";

  leaves.appendChild(leaf);
}
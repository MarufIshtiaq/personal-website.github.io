/* Background sparkles */
const sparkleBox = document.getElementById("sparkles");
const colors = ["#ff4d6d", "#ffafcc", "#ffd166", "#cdb4db", "#ffb703"];

function createSparkle() {
  const s = document.createElement("span");
  s.innerHTML = "❤";
  s.style.left = Math.random() * 100 + "vw";
  s.style.top = Math.random() * 100 + "vh";
  s.style.color = colors[Math.floor(Math.random() * colors.length)];
  s.style.animationDuration = 2 + Math.random() * 3 + "s";

  sparkleBox.appendChild(s);
  setTimeout(() => s.remove(), 5000);
}

setInterval(createSparkle, 300);

/* Random blinking timing for leaves */
document.querySelectorAll(".leaf").forEach(leaf => {
  leaf.style.animationDelay = Math.random() * 4 + "s";
});

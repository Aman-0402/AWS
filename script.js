// ================= TYPEWRITER =================
const text = "AWS";
let index = 0;
const speed = 200;
const typedText = document.getElementById("typed-text");

function typeWriter() {
  if (index < text.length) {
    typedText.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = function () {
  typeWriter();

  // Play Intro Sound (optional)
  const audio = new Audio("dragon-studio-epic-glitch-intro.mp3");
  audio.volume = 0.5;
  audio.play().catch(() => {});
};

// ================= PARTICLES =================
particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    size: { value: 3 },
    color: { value: "#ff9900" },
    line_linked: {
      enable: true,
      color: "#ff9900"
    },
    move: { speed: 2 }
  }
});

// ================= TRANSITION =================
document.getElementById("enterBtn").addEventListener("click", function() {
  document.body.classList.add("fade-out");
  setTimeout(() => {
    window.location.href = "content.html";
  }, 1000);
});
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

/* SECTION REVEAL ANIMATION */
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.15
});

sections.forEach(section => {
  observer.observe(section);
});

/* QUIZ LOGIC */
function checkAnswer(button, isCorrect) {
  const explanation = button.parentElement.querySelector(".explanation");

  if (isCorrect) {
    button.style.background = "#16a34a";
  } else {
    button.style.background = "#dc2626";
  }

  explanation.style.display = "block";
}
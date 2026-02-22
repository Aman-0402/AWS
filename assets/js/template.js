/* ============================================================
   TEMPLATE.JS  —  AWS Academy Data Engineering
   Handles: top button, section reveal animation, quiz logic
   ============================================================ */

/* ── TOP BUTTON ── */
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {
  const scrolled = document.body.scrollTop > 300 || document.documentElement.scrollTop > 300;
  topBtn.style.display = scrolled ? "flex" : "none";
});

topBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ── SECTION REVEAL ANIMATION ── */
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.12 });

sections.forEach(section => observer.observe(section));

/* ── QUIZ LOGIC ── */

// State
let answered = 0;
let correct  = 0;
let total    = 0;

// Count total questions on page load
document.addEventListener("DOMContentLoaded", () => {
  total = document.querySelectorAll(".quiz-question").length;
});

/**
 * answer(btn, chosen, correctAns)
 *   btn        – the clicked button element
 *   chosen     – the letter of the chosen option  e.g. "A"
 *   correctAns – the letter of the correct option e.g. "B"
 */
function answer(btn, chosen, correctAns) {
  const question = btn.closest(".quiz-question");
  if (question.classList.contains("answered")) return;
  question.classList.add("answered");
  answered++;

  // Disable all buttons in this question
  const allBtns = question.querySelectorAll(".option-btn");
  allBtns.forEach(b => (b.disabled = true));

  const exp = question.querySelector(".explanation");

  if (chosen === correctAns) {
    btn.classList.add("correct");
    exp.classList.add("show", "correct-exp");
    correct++;
  } else {
    btn.classList.add("wrong");
    // Strip leading ✅ and prefix ❌
    exp.classList.add("show", "wrong-exp");
    exp.innerHTML = "❌ Not quite. " + exp.innerHTML.replace(/^✅\s*/, "");
    // Highlight the correct button
    allBtns.forEach(b => {
      if (b.querySelector(".opt-label").textContent.trim() === correctAns) {
        b.classList.add("correct");
      }
    });
  }

  // Show score once all questions are answered
  if (answered === total) showScore();
}

/**
 * checkAnswer(button, isCorrect)
 *   Legacy helper kept for backward compatibility with
 *   simple true/false quiz buttons (no opt-label needed).
 */
function checkAnswer(button, isCorrect) {
  const question = button.closest(".quiz-question");
  if (question.classList.contains("answered")) return;
  question.classList.add("answered");

  const siblings = question.querySelectorAll("button");
  siblings.forEach(b => (b.disabled = true));

  const explanation = question.querySelector(".explanation");

  if (isCorrect) {
    button.style.background = "#16a34a";
    if (explanation) explanation.style.display = "block";
  } else {
    button.style.background = "#dc2626";
    if (explanation) explanation.style.display = "block";
  }
}

function showScore() {
  const bar = document.getElementById("scoreBar");
  if (!bar) return;

  const countEl = document.getElementById("scoreCount");
  const msgEl   = document.getElementById("scoreMsg");

  countEl.textContent = `${correct} / ${total}`;

  if (correct === total) {
    msgEl.textContent = "🏆 Perfect score! You are ready for Module 2.";
  } else if (correct >= Math.ceil(total * 0.7)) {
    msgEl.textContent = "✅ Great work! Review the missed questions and move on.";
  } else {
    msgEl.textContent = "📖 Review the sections above and try again.";
  }

  bar.style.display = "block";
  bar.scrollIntoView({ behavior: "smooth", block: "center" });
}
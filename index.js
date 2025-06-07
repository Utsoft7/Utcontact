document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".email-card, .social-link");

  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transition = "all 0.2s ease";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transition = "all 0.3s ease";
    });
  });

  const links = document.querySelectorAll("a[href]");
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      console.log("Link clicked:", this.href);
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

let ticking = false;

function updateAnimations() {
  ticking = false;
}

window.addEventListener("scroll", function () {
  if (!ticking) {
    requestAnimationFrame(updateAnimations);
    ticking = true;
  }
});

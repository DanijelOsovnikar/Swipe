const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    menu.classList.remove("active");
  }
});

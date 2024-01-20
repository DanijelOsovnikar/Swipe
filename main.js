const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");

hamburger.addEventListener("click", () => {
  bar1.classList.toggle("animateBar1");
  bar2.classList.toggle("animateBar2");
  bar3.classList.toggle("animateBar3");
  menu.classList.toggle("active");
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    menu.classList.remove("active");
  }
});

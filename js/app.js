document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");
});

const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".slide");

let index = 0;

setInterval(() => {
  index++;
  if (index >= slides.length) {
    index = 0;
  }
  track.style.transform = `translateX(-${index * 100}%)`;
}, 4000);

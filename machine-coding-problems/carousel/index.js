const slides = document.querySelectorAll(".slide");

// loop through slides and set each slides translateX property to index * 100%
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

const nextImg = document.querySelector(".btn-next");

let curSlide = 0;
let lastSlide = slides.length - 1;

nextImg.addEventListener("click", function () {
  if (curSlide === lastSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  slides.forEach((slide, idx) => {
    slide.style.transform = `translateX(${100 * (idx - curSlide)}%)`;
  });
});

const prevImg = document.querySelector(".btn-prev");

prevImg.addEventListener("click", function () {
  if (curSlide === 0) {
    curSlide = lastSlide;
  } else {
    curSlide--;
  }
  slides.forEach((slide, idx) => {
    slide.style.transform = `translateX(${100 * (idx - curSlide)}%)`;
  });
});

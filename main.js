var swiper = new Swiper(".swiper", {
  effect: "cube",
  allowTouchMove: false,
  grabCursor: false,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  mousewheel: true,
});
swiper.sliderMove = function (s, e) {
  console.log(s);
};
function Navigate(indx) {
  for (let i of document.querySelectorAll(".Links li"))
    i.classList.remove("activeLink");
  Array.from(document.querySelectorAll(".Links li"))[indx].classList.add(
    "activeLink"
  );
  swiper.slideTo(indx, 1000, true);
}
// main.js
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    direction: "horizontal",
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

function Navigate(index) {
  var swiper = document.querySelector(".swiper").swiper;
  swiper.slideTo(index);
}

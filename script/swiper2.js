const videoSwiper = new Swiper("#videoSwiper", {
  parallax: true,
  navigation: {
    prevEl: ".swiper-arrow3",
    nextEl: ".swiper-arrow4",
  },
  loop: true,
  autoplay: {
    delay: 5000,
  },
});
const swiperArrow3 = document.querySelector(".swiper-arrow3");
const swiperArrow4 = document.querySelector(".swiper-arrow4");

swiperArrow3.addEventListener("click", function (e) {
  videoSwiper.slidePrev();
});
swiperArrow4.addEventListener("click", function (e) {
  videoSwiper.slideNext();
});

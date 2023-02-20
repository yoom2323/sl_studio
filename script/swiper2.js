const videoSwiper = new Swiper("#videoSwiper", {
  parallax: true,
  navigation: {
    prevEl: ".swiperArrow3",
    nextEl: ".swiperArrow4",
  },
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  spacebetween: 0,
  autoHeight: true,
  slidesPerView: 2,
  centeredSlides: true,
});
const swiperArrow3 = document.querySelector(".swiperArrow3");
const swiperArrow4 = document.querySelector(".swiperArrow4");

swiperArrow3.addEventListener("click", function (e) {
  videoSwiper.slidePrev();
});
swiperArrow4.addEventListener("click", function (e) {
  videoSwiper.slideNext();
});

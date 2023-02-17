const mainSwiper = new Swiper("#mainSwiper", {
  parallax: true,
  navigation: {
    nextEl: ".swiper-arrow2",
    prevEl: ".swiper-arrow1",
  },

  loop: true,
  pagination: {
    el: ".pagination1",
    type: "fraction",
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

prevBtn.addEventListener("click", function (e) {
  mainSwiper.slidePrev();
});
nextBtn.addEventListener("click", function (e) {
  mainSwiper.slideNext();
});

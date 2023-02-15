const mainSwiper = new Swiper("#mainSwiper", {
  parallax: true,
  navigation: {
    nextEl: ".swiper-arrow1",
    prevEl: ".swiper-arrow2",
  },
  loop: true,
  pagination: {
    el: ".pagination1",
    type: "fraction",
  },
});

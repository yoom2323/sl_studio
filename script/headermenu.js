// 스크롤바 없애기
function hidden() {
  document.body.style.overflowY = "hidden";
}
// 스크롤바 보이기
function scroll() {
  document.body.style.overflowY = "scroll";
}
const shareBtn = document.querySelector(".xi-share-alt-o");
const share = document.querySelector("#share");

shareBtn.addEventListener("click", () => share.classList.toggle("active"));

const searchBtn = document.querySelector("#searchI");
const search = document.querySelector("#search");
const searchX = document.querySelector(".xMark");

searchBtn.addEventListener("click", () => search.classList.toggle("active"));

searchX.addEventListener("click", () => search.classList.toggle("active"));

//메뉴 토글 슬라이드

const menuBtn = document.querySelector(".fa-bars");
const menu = document.querySelector(".gnbWrapper");
const gnbX = document.querySelector("#gnbX");

menuBtn.addEventListener("click", function () {
  hidden(true);
  menu.classList.toggle("active");
});
gnbX.addEventListener("click", function () {
  scroll(true);
  menu.classList.toggle("active");
});

const about = document.querySelector("#about");
const aboutLi = document.querySelector("#aboutLi");
const abPlus = document.querySelector(".abPlus");

about.addEventListener("click", function () {
  aboutLi.classList.toggle("active");
  archiveLi.classList.remove("active");
  noticeLi.classList.remove("active");
  abPlus.classList.toggle("active");
  arPlus.classList.remove("active");
  noPlus.classList.remove("active");
});

const archive = document.querySelector("#archive");
const archiveLi = document.querySelector("#archiveLi");
const arPlus = document.querySelector(".arPlus");

const archiveToggle = archive.addEventListener("click", function () {
  archiveLi.classList.toggle("active");
  noticeLi.classList.remove("active");
  aboutLi.classList.remove("active");
  arPlus.classList.toggle("active");
  abPlus.classList.remove("active");
  noPlus.classList.remove("active");
});

const notice = document.querySelector("#notice");
const noticeLi = document.querySelector("#noticeLi");
const noPlus = document.querySelector(".noPlus");

notice.addEventListener("click", function () {
  noticeLi.classList.toggle("active");
  archiveLi.classList.remove("active");
  aboutLi.classList.remove("active");
  noPlus.classList.toggle("active");
  abPlus.classList.remove("active");
  arPlus.classList.remove("active");
});

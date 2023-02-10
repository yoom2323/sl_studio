// 스크롤바 없애기
function hidden() {
  document.body.style.overflow = "hidden";
}

const shareBtn = document.querySelector(".xi-share-alt-o");
const share = document.querySelector("#share");

shareBtn.addEventListener("click", () => share.classList.toggle("active"));

const searchBtn = document.querySelector("#searchI");
const search = document.querySelector("#search");
const searchX = document.querySelector(".xMark");

searchBtn.addEventListener("click", () => search.classList.toggle("active"));

searchX.addEventListener("click", () => search.classList.toggle("active"));

const menuBtn = document.querySelector(".fa-bars");
const menu = document.querySelector(".gnbWrapper");
const gnbX = document.querySelector("#gnbX");

menuBtn.addEventListener("click", function () {
  hidden(true);
  menu.classList.toggle("active");
});
gnbX.addEventListener("click", function () {
  hidden(false);
  menu.classList.toggle("active");
});

const about = document.querySelector("#about");
const aboutLi = document.querySelector("#aboutLi");

about.addEventListener("click", function () {
  aboutLi.classList.toggle("active");
});

const archive = document.querySelector("#archive");
const archiveLi = document.querySelector("#archiveLi");

archive.addEventListener("click", function () {
  archiveLi.classList.toggle("active");
});

const notice = document.querySelector("#notice");
const noticeLi = document.querySelector("#noticeLi");

notice.addEventListener("click", function () {
  noticeLi.classList.toggle("active");
});

const topBtn = document.querySelector("#top_btn");
const box3 = document.querySelector(".box3");

let box3OffesetTop = box3.offsetTop;
let clientHt = document.documentElement.clientHeight;

let result = box3OffesetTop - clientHt - box3.clientHeight;

console.log(box3.offsetTop);
addEventListener("scroll", () => {
  if (scrollY >= result) {
    topBtn.classList.add("on");
  } else if (scrollY < result) {
    topBtn.classList.remove("on");
  }
});

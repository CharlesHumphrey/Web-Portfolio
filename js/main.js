let logotxt = document.getElementById("logo");
logotxt.innerText = "<Humphrey/>";

let scrollUp = document.getElementById("scroll-up");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 20
  ) {
    scrollUp.style.display = "block";
  } else {
    scrollUp.style.display = "none";
  }
}

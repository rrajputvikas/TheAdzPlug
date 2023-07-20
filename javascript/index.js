const carousel = document.querySelector("#carouselExampleIndicatorsDesktop");
const carousel_inner = carousel.querySelector(".carousel-inner");
let i = 0;

function ToggleClass() {
  let carousel_item = carousel_inner.querySelectorAll(".carousel-item");

  function func1() {
    carousel_item[i % carousel_item.length].className += " carousel-item-left";
    carousel_item[(i + 1) % carousel_item.length].className +=
      " carousel-item-next";

    setTimeout(func2, 600);
  }
  function func2() {
    carousel_item[i % carousel_item.length].className = carousel_item[
      i % carousel_item.length
    ].className.replace(" active carousel-item-left", "");
    carousel_item[(i + 1) % carousel_item.length].className +=
      " carousel-item-left";
    carousel_item[(i + 1) % carousel_item.length].className = carousel_item[
      (i + 1) % carousel_item.length
    ].className.replace(" carousel-item-next carousel-item-left", " active");

    setTimeout(func1, 3000);
    i += 1;
  }
  func1();
}

function navGuard() {
  var navElement = document.querySelector("nav");
  this.scrollY < 1
    ? (navElement.style.background = "Transparent")
    : (navElement.style.background =
        "linear-gradient(to right, #00031d, #000536)");
}

window.addEventListener("scroll", navGuard, false);

setTimeout(ToggleClass);

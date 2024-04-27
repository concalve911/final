const menuBtn = document.querySelector(".mobile__menu-btn");
const menuClose = document.querySelector(".menu__close");
const menuList = document.querySelector(".mobile-btn__list"); // Здесь изменен класс

menuBtn.addEventListener("click", () => {
  menuList.classList.add("mobile__btn-list--open");
});

menuClose.addEventListener("click", () => {
  menuList.classList.remove("mobile__btn-list--open");
});

$(function () {
  $(".tabs").tabs();
});

$(function () {
  $(".slider__wrapper").slick({
    dots: true,
    appendDots: $(".slider__wrapper"),
    prevArrow: false,
    nextArrow: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});

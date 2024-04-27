$(function () {
  $(".tabs").tabs();
  $(".slider__wrapper").slick({
    dots: true,
    prevArrow: false,
    nextArrow: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});

const menuBtn = document.querySelector(".mobile__menu-btn");
const menuClose = document.querySelector(".menu__close");
const menuList = document.querySelector(".mobile-btn__list"); // Здесь изменен класс

menuBtn.addEventListener("click", () => {
  menuList.classList.add("mobile__btn-list--open");
});

menuClose.addEventListener("click", () => {
  menuList.classList.remove("mobile__btn-list--open");
});

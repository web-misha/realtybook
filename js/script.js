function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});

new Swiper(".slider1", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  initialSlide: 1,
});
new Swiper(".slider2", {
  slidesPerView: 5.5,
  slideToClickedSlide: true,
  initialSlide: 0,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
new Swiper(".slider3", {
  pagination: {
    el: ".swiper-pagination-slider3",
    clickable: true,
    dynamicBullets: true,
  },
});

$(".form_button_fade").click(function () {
  $(".form_body").fadeIn();
  $("html").addClass("lock");
});
$(document).mouseup(function (e) {
  var popup = $('.form_content');
  if (e.target != popup[0] && popup.has(e.target).length === 0) {
    $('.form_body').fadeOut();
    $("html").removeClass("lock");
  }
})

$(document).ready(function () {
  $(".header_burger_desktop").click(function (event) {
    $(".menu_burger").toggleClass("menu_burger_active");
    $(".header_burger_desktop").toggleClass("header_burger_desktop_active");
  });
});

$(".form_inputs_tel").mask("+7(999)999-99-99");

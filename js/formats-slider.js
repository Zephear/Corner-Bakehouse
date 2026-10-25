const swiper = new Swiper(".formats-swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  centeredSlides: false,

  navigation: {
    nextEl: ".carousel-button.next",
    prevEl: ".carousel-button.prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
   
    },
    1280: {
      slidesPerView: 3,
     
    },
  },
});

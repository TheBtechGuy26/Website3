var swiper = new Swiper(".slide-content", {
    slidesPerView: 4,
    centeredSlides: true,
    spaceBetween: 10,
    loop: true,
   centerSlide: 'true',
   fade: 'true',
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950:{
            slidesPerView: 3,
        },
    },
  });


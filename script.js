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
  });

// var swiper = new Swiper(".slide-content", {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     slidesPerGroup: 3,
//     loop: true,
//     centerSlide: 'true',
//     fade: 'true',
//     grabCursor: 'true',
//     loopFillGroupWithBlank: true,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//         dynamicBullets: true,
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// });

// var swiper = new Swiper(".slide-content", {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     slidesPerGroup: 3,
//     loop: true,
//     centeredSlides: true, // Use centeredSlides instead of centerSlide
//     slideToClickedSlide: true, // To slide to the clicked slide
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//         dynamicBullets: true,
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// });

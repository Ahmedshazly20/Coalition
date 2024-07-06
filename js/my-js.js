var swiper = new Swiper(".mySwiper", {
    autoplay: {
        delay: 2000,
      },
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: '.fa-solid fa-angle-right ',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
      
        // when window width is >= 640px
        640: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        768:{
            slidesPerView: 3,
          spaceBetween: 40
        },
        992:{
            slidesPerView: 4,
            spaceBetween: 40
        }
      }
  });
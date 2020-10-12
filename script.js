let mySwiper = new Swiper('.swiper-container', {
  speed: 1000,
  spaceBetween: 100,
  direction: 'horizontal',
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  autoplay: {
    delay: 5000,
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    dynamicBullets: true,
    dynamicMainBullets: 1,
  },
});

let slider = document.querySelector('.slider-container');

// function mobilePagination() {
//   if(window.innerWidth <= 540 && slider.dataset.mobile == 'false') {
//     mySwiper.pagination = {
//       el: '.swiper-pagination',
//       type: 'bullets',
//     };
//     slider.dataset.mobile = 'true';
//   }
//   if(window.innerWidth > 540) {
//     slider.dataset.mobile = 'false';
//     delete mySwiper.pagination;
//   }
// };

// window.addEventListener('resize', () => {
//   mobilePagination();
// });

const burgerButton = document.querySelector('.header__burger');
const navMenu = document.querySelector('.navigation__list');
burgerButton.addEventListener('click', function() {
  navMenu.classList.toggle('navigation__burger');
})

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
    bulletClass: 'checkbox__label',
    bulletActiveClass: 'checkbox__label-checked'
  },
});

let slider = document.querySelector('.slider-container');

const burgerBtn = document.querySelector('.header__burger');
const targetElement = document.querySelector('.navigation__list');

burgerBtn.addEventListener('click', function() {
  targetElement.classList.toggle('navigation__list-mobile');

  targetElement.classList.contains('navigation__list-mobile')
  ? bodyScrollLock.disableBodyScroll(targetElement)
  : bodyScrollLock.enableBodyScroll(targetElement)

  burgerBtn.querySelector('.secondline').classList.toggle('d-none');
  burgerBtn.querySelector('.firstline').classList.toggle('rotateR');
  burgerBtn.querySelector('.thirdline').classList.toggle('rotateL');

})


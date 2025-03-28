// スライダーSwiper.jsを使用するため
// 【参考】https://kiomiru.co.jp/blog/coding/swiper-js/
// 【参考(公式)】https://swiperjs.com/get-started
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  spaceBetween: 0,
  speed: 3000,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    // bootstrapのブレイクポイント Medium: 768pxに合わせた
    768: {
      slidesPerView: 2,
    },
  },
});

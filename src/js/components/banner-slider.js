import Swiper from "../vendor/swiper.min.js";
import vars  from "../_vars.js";
 const bannerSlider = new Swiper(vars.$bannerSlider, {
  loop: true,
  sliderPerView: 2,
  pagination: {
    el: '.banner-pag',
    type: 'bullets',
    clickable: 'true',
  },
 });


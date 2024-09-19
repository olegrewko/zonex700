import './_vendor';
import vars from '../js/_vars';

import './_functions';

import './components/tabs.js';
import './components/catalog-props.js';
import './components/catalog-filter-toggle.js';
import './components/burger.js';
import './components/card-bottom-tabs.js';
import './components/banner-slider.js';
import './components/catalog-slider.js';
import './components/stepper.js';
import './components/color-select.js';
import './components/card-slider.js';
// import './components/stepper.js';
import './components/jquery.js';
import './components/product.js';

// import 'simplebar/dist/simplebar.css';
vars.$freeDeliveryBtn.addEventListener('click', (e) => {
  e.currentTarget.closest('.free-delivery__btn').style.display = 'none';
});

if (document.querySelector('[data-bar]')) {
  new SimpleBar(document.querySelector('.card-description__navigation'));
}

if (document.querySelector('.to-top')) {
  document.querySelector('.to-top').addEventListener('click', (e) => {
    e.preventDefault();
    scrollTo(document.querySelector('.site-container'));
  });
}
$(function () {
  $('.nav__btn').on('click', function name() {
    $('.nav__list').toggleClass('nav__list--active');


  });
});

 $(document).ready(function () {
        var defaults = {
          containerID: "toTop",
          containerHoverID: "toTopHover",
          scrollSpeed: 1200,
          easingType: "linear",
        };

        $().UItoTop({
          easingType: "easeOutQuart",
        });
      });




if (document.querySelector('.tab')) {
  document.querySelector('.tab').addEventListener('click', (t) => {

        t.preventDefault();
        $($(this).siblings()).removeClass('tab--active');
        $($(this).parent().siblings().find('div')).removeClass('tabs-content--active');
        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');

  });
}



        function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");

    }

import vars  from "../_vars";

if (vars.$colorSelect) {
  vars.$colorSelect.addEventListener('click', (e) => {
    if (e.target.classList.contains('color-select__btn')) {

      document.querySelectorAll('.color-select__btn').forEach(el => el.classList.remove('color-select__btn--active'));

      let color = e.target.dataset.color;

      e.currentTarget.querySelector('.color-select__selected span').textContent = color;

      e.target.classList.add('color-select__btn--active');
    }
  });

}

if (vars.$sizeSelect) {
  let size = '';

  vars.$sizeSelect.addEventListener('click', (e) => {
    if (e.target.classList.contains('size-select__btn')) {

      e.currentTarget.querySelector('.size-select__clear').style.display = 'inline-flex';

      let color = e.target.dataset.color;

      e.currentTarget.querySelector('.size-select__selected span').textContent = color;

      e.target.classList.toggle('size-select__btn--active');

      if (e.target.classList.contains('size-select__btn--active')) {
        let currentSize = e.target.textContent;

        size += currentSize + ', ';
      } else {
        let currentSize = e.target.textContent + ', ';

        size = size.replace(currentSize, '');
      }

      e.currentTarget.querySelector('.size-select__selected span').textContent = size;

      if (!size) {
        e.currentTarget.querySelector('.size-select__selected span').textContent = 'Select a size';
      }
    }

    if (e.target.classList.contains('size-select__clear')) {
      e.currentTarget.querySelector('.size-select__selected span').textContent = 'Select a size';
      document.querySelectorAll('.size-select__btn').forEach(el => el.classList.remove('size-select__btn--active'));
      e.target.style.display = 'none';
      size = '';
    }
  });

}

  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  }

  function initializeClock(id, endtime) {
    const clock = document.getElementById(id);
    const daysSpan = clock.querySelector('.days');
    const hoursSpan = clock.querySelector('.hours');
    const minutesSpan = clock.querySelector('.minutes');
    const secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
      const t = getTimeRemaining(endtime);

      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  }

  const deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
  initializeClock('promo__clock', deadline);
  initializeClock('promo__clock-white', deadline);

// $(function () {
//    $('.shop-content__filter-btn').on('click', function(){

//     $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
//     $(this).addClass('shop-content__filter-btn--active');
//   });
// });

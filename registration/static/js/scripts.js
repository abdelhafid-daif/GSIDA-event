document.addEventListener('DOMContentLoaded', () => {
    const countdownElement = document.querySelector('#timer-912100224');
    const targetDate = new Date(countdownElement.getAttribute('data-countdown'));

    function updateCountdown() {
      const now = new Date();
      const timeDifference = targetDate - now;

      if (timeDifference <= 0) {
        countdownElement.innerHTML = `<div class="circle">Event Started!</div>`;
        clearInterval(interval);
        return;
      }

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      document.getElementById('days').textContent = days;
      document.getElementById('hours').textContent = hours;
      document.getElementById('minutes').textContent = minutes;
      document.getElementById('seconds').textContent = seconds;
    }

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();
});
$(document).ready(function () {
    $('.owl-show-events').owlCarousel({
        items: 4,
        loop: true,
        dots: true,
        nav: true,
        autoplay: true,
        margin: 30,
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 4 }
        }
    });
});


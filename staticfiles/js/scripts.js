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

document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      // Get the target section's ID from the anchor's href
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      // Scroll to the section with smooth behavior
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start' // You can change the block property to 'center' or 'end' if you prefer
      });
    });
});
document.querySelectorAll('[data-bs-target="#registrationModal"]').forEach(button => {
  button.addEventListener('click', function () {
    const participationType = this.getAttribute('data-participation-type');
    const tarif = button.getAttribute('data-tarif');
    const tarifpro = button.getAttribute('data-tarif-pro');
    const tarifgold = button.getAttribute('data-tarif-gold');
    const description = button.getAttribute('data-description');
    document.getElementById('type_de_participation').value = participationType;
    const tarifDetail = document.getElementById('tarifDetail');
    const tarifDetailPro = document.getElementById('tarifDetailPro');
    const tarifDetailGold = document.getElementById('tarifDetailGold');
    const descriptionDetail = document.getElementById('descriptionDetail');
    tarifDetail.textContent = tarif;
    tarifDetailPro.textContent = tarifpro;
    tarifDetailGold.textContent = tarifgold;
    descriptionDetail.textContent = description;
  });
});
document.querySelectorAll('[data-bs-target="#registrationModaltow"]').forEach(button => {
  button.addEventListener('click', function () {
    const participationType = this.getAttribute('data-participation-type');
    const tarif = button.getAttribute('data-tarif');
    const tarifpro = button.getAttribute('data-tarif-pro');
    const tarifgold = button.getAttribute('data-tarif-gold');
    const description = button.getAttribute('data-description');
    document.getElementById('type_de_participation').value = participationType;
    const tarifDetail = document.getElementById('tarifDetail');
    const tarifDetailPro = document.getElementById('tarifDetailPro');
    const tarifDetailGold = document.getElementById('tarifDetailGold');
    const descriptionDetail = document.getElementById('descriptionDetail');
    tarifDetail.textContent = tarif;
    tarifDetailPro.textContent = tarifpro;
    tarifDetailGold.textContent = tarifgold;
    descriptionDetail.textContent = description;
  });
});
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
      const alerts = document.querySelectorAll(".alert");
      alerts.forEach(alert => alert.remove());
  }, 5000); // Supprime l'alerte après 5 secondes
});

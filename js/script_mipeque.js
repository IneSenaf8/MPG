<<<<<<< HEAD:js/script_mipeque.js
let currentSlide = 0;
const slides = document.querySelectorAll('.slide'); // hace que cambien de color el slider cuando pao el puntero //

function showSlide(n) {
  slides[currentSlide].style.display = 'none';
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].style.display = 'block';
}

function changeSlide(n) {
  showSlide(currentSlide + n);
}

showSlide(currentSlide);

const wheel = document.querySelector('.wheel');
const spinButton = document.querySelector('.spin-button');







=======
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(n) {
  slides[currentSlide].style.display = 'none';
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].style.display = 'block';
}

function changeSlide(n) {
  showSlide(currentSlide + n);
}

showSlide(currentSlide);



>>>>>>> 7a2fc05120739fc25ffe5f5d1392dbc207b7838d:script_mipeque.js

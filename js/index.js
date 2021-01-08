'use strict';

//Hamburger/Nav Button
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

//Add Event Listener To Open Navigation Button
navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

//Each Time Link In Navigation Is Clicked, Closed Navigation
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  });
});

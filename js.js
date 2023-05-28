/* Menu toggle function */
const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.nav-menu');

let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    navMenu.classList.add('show');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    navMenu.classList.remove('show');
    menuOpen = false;
  }
});

/* Smooth scrolling effect for navigation links */
const navLinks = document.querySelectorAll('.nav-menu a');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const href = link.getAttribute('href');
    const offsetTop = document.querySelector(href).offsetTop;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  });
});

/* Form validation function */
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', e => {
  e.preventDefault();

  if (nameInput.value.trim() === '') {
    alert('Please enter your name');
    nameInput.focus();
    return;
  }

  if (emailInput.value.trim() === '') {
    alert('Please enter your email');
    emailInput.focus();
    return;
  }

  if (messageInput.value.trim() === '') {
    alert('Please enter a message');
    messageInput.focus();
    return;
  }

  alert('Thank you for your message!');
  form.reset();
});

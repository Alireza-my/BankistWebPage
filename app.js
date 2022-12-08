// Declration
const section1 = document.querySelector('#section--1');
const btnScroll = document.querySelector('.btn--scroll-to');
const modal = document.querySelector('modal');
const overlay = document.querySelector('overlay');
const openBtn = document.querySelector('.btn--show-modal');
const closeBtn = document.querySelector('.btn--close-modal');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');
////////
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// TABS
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  if (!clicked) return;

  // Remove
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Active tab
  clicked.classList.add('operations__tab--active');
  // Active Content
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// Navigation hover
const handle = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const links = e.target;
    const sibling = links.closest('.nav').querySelectorAll('.nav__link');
    const logo = links.closest('.nav').querySelector('img');
    sibling.forEach(el => {
      if (el !== links) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', handle.bind(0.5));
nav.addEventListener('mouseout', handle.bind(1));

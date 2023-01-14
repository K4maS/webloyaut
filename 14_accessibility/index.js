// tab

let tabBtn = document.querySelectorAll('.our-work__link-tab');
let tabBlock = document.querySelectorAll('.our-work__block');

tabBtn.forEach(function (el) {
  el.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabBtn.forEach(function (btn) {
      btn.classList.remove('our-work__link-tab--active')
    });
    e.currentTarget.classList.add('our-work__link-tab--active');

    tabBlock.forEach(function (element) { element.classList.remove('our-work__block--active') });
    document.querySelector(`[data-target="${path}" ]`).classList.add('our-work__block--active');
  });
});


// accordion
new Accordion('.accordion-container');

//burger-menu
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.item__link');

burger.addEventListener('click',
  function () {
    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');

  });




menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    burger.classList.remove('burger--active');
    menu.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll');
  });
});
//search
let searchBtn = document.querySelector('.header__search');
let searchBlock = document.querySelector('.search-block');
let searchInput = document.querySelector('.search-input');
let searchCloseBtn = document.querySelector('.search__close-btn');

searchBtn.addEventListener('click', function () {
  searchBtn.classList.add('.header__search--active');
  searchBlock.classList.add('search-block--active');
  searchInput.classList.add('search-input--active');
  searchCloseBtn.classList.add('search__close-btn--active');
});

searchCloseBtn.addEventListener('click', function () {
  searchBtn.classList.remove('.header__search--active');
  searchBlock.classList.remove('search-block--active');
  searchInput.classList.remove('search-input--active');
  searchCloseBtn.classList.remove('search__close-btn--active');
});



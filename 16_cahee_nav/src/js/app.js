// $('.navigation__btn').on('click', function(e) {
//   e.preventDefault();
//   $(this).toggleClass(''navigation__btn'_active');
//   $('.navigation__list').toggleClass(''navigation__list'_active');
// });

// document.querySelector('.navigation__btn').addEventListener('click', function (e) {
//   e.preventDefault;
//   this.classList.toggle('active');
//   document.querySelector('.navigation__list').classList.toggle('db');
// });

$('.navigation__btn').on('click', function(e) {
  e.preventDefault;
  $(this).toggleClass('navigation__btn_active');
  ('.navigation__list').toggleClass('navigation__list_active');
});

$('.menu-btn').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('menu-btn_active');
  $('.menu-nav').toggleClass('menu-nav_active');
});
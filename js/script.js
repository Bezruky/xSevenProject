// // Плавный переход якорей
// $('a[href^="#"]').on('click', function (event) {
//   event.preventDefault();
//
//   var target = $(this.hash);
//   $('html, body').stop().animate({
//     'scrollTop': target.offset().top
//   }, 1000);
// });


// Burger
const burger = document.querySelector('.header__burger')
const menu = document.querySelector('.header__menu')
const list = document.querySelector('.menu__list')

burger.addEventListener('click', () => {
  if (!(burger.classList.contains('active'))) {
    burger.classList.add('active')
    menu.classList.add('active')
    document.body.classList.add('lock')
  } else {
    burger.classList.remove('active')
    menu.classList.remove('active')
    document.body.classList.remove('lock')
  }
})
list.addEventListener('click', () => {
  if (burger.classList.contains('active')) {
    burger.classList.remove('active')
    menu.classList.remove('active')
    document.body.classList.remove('lock')
  }
})



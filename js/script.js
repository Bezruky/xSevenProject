// // Плавный переход якорей
let links = document.querySelectorAll('li>a[href^="#"]')

links.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault()

    const id = link.getAttribute('href')

    document.querySelector(id).scrollIntoView({behavior: 'smooth'});
  })
})

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

// Slider
new Swiper('.swiper', {

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  loop: true,
  simulateTouch: true,
  spaceBetween: 1,
});


// Parallax
document.body.querySelector('.history__pictures').childNodes.forEach(child => {
  if (child.nodeName !== '#text') {
    child.classList.add('scene')
  }
})

let parallax = document.querySelectorAll('.scene')

parallax.forEach(elem => {
  let parallaxInstance = new Parallax(elem, {
    relativeInput: true
  })
  parallaxInstance.friction(0.1, 0.1)
})


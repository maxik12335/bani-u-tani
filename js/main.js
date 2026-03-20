document.addEventListener("DOMContentLoaded", () => {
  // menu-mobyle--active
  const burgerMenu = document.querySelector('.menu-mobyle')
  const burgerMenuButton = document.querySelector('.burger')
  const burgerMenuCloseButton = document.querySelector('.close')

  burgerMenuButton.addEventListener('click', () => {
    document.querySelector('body').style.overflow = "hidden"
    burgerMenu.classList.contains('menu-mobyle--active') ? "" : burgerMenu.classList.add('menu-mobyle--active')
  })

  burgerMenuCloseButton.addEventListener('click', () => {
    document.querySelector('body').style.overflow = ""
    burgerMenu.classList.contains('menu-mobyle--active') ? burgerMenu.classList.remove('menu-mobyle--active') : ""
  })

  var swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 2000,
  },
  loop:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  
  breakpoints: {
    350: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 3
    },
  }

});
})
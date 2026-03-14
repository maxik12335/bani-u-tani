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
})
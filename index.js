// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})


// //  Javascript from cleanfolio-minimal-main/script.js
// const body = document.body

// const btnTheme = document.querySelector('.fa-moon')
// const btnHamburger = document.querySelector('.fa-bars')

// const addThemeClass = (bodyClass, btnClass) => {
//   body.classList.add(bodyClass)
//   btnTheme.classList.add(btnClass)
// }

// const getBodyTheme = localStorage.getItem('portfolio-theme')
// const getBtnTheme = localStorage.getItem('portfolio-btn-theme')

// addThemeClass(getBodyTheme, getBtnTheme)

// const isDark = () => body.classList.contains('dark')

// const setTheme = (bodyClass, btnClass) => {

// 	body.classList.remove(localStorage.getItem('portfolio-theme'))
// 	btnTheme.classList.remove(localStorage.getItem('portfolio-btn-theme'))

//   addThemeClass(bodyClass, btnClass)

// 	localStorage.setItem('portfolio-theme', bodyClass)
// 	localStorage.setItem('portfolio-btn-theme', btnClass)
// }

// const toggleTheme = () =>
// 	isDark() ? setTheme('light', 'fa-moon') : setTheme('dark', 'fa-sun')

// btnTheme.addEventListener('click', toggleTheme)

// const displayList = () => {
// 	const navUl = document.querySelector('.nav__list')

// 	if (btnHamburger.classList.contains('fa-bars')) {
// 		btnHamburger.classList.remove('fa-bars')
// 		btnHamburger.classList.add('fa-times')
// 		navUl.classList.add('display-nav-list')
// 	} else {
// 		btnHamburger.classList.remove('fa-times')
// 		btnHamburger.classList.add('fa-bars')
// 		navUl.classList.remove('display-nav-list')
// 	}
// }

// btnHamburger.addEventListener('click', displayList)

// const scrollUp = () => {
// 	const btnScrollTop = document.querySelector('.scroll-top')

// 	if (
// 		body.scrollTop > 500 ||
// 		document.documentElement.scrollTop > 500
// 	) {
// 		btnScrollTop.style.display = 'block'
// 	} else {
// 		btnScrollTop.style.display = 'none'
// 	}
// }

// document.addEventListener('scroll', scrollUp)

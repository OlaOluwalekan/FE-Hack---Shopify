const searchFormDOM = document.querySelector('.search-form')
const searchInputDOM = document.querySelector('.search-form > input')
const notificationBtnDOM = document.querySelector('.notification>button')
const userMenuBtnDOM = document.querySelector('.user-profile>button')
const overlayDOM = document.querySelector('.overlay')
const notificationPopupDOM = document.querySelector('.notification-popup')
const userMenuPopupDOM = document.querySelector('.user-menu-popup')
const test = document.querySelector('.test')

// SEARCH INPUT ON FOCUS
searchInputDOM.onfocus = () => {
  searchFormDOM.style.border = '2px solid var(--plainWhite)'
}

searchInputDOM.onblur = () => {
  searchFormDOM.style.border = '1px solid var(--strokeS200)'
}

// SEARCH INPUT ON FOCUSED
searchInputDOM.onmouseover = () => {
  searchFormDOM.style.border = '1px solid var(--strokeS100)'
}

searchInputDOM.onmouseleave = () => {
  searchFormDOM.style.border = '1px solid var(--strokeS200)'
}

// SHOWING AND HIDING NOTIFICATIONS AND USER MENU
let openedMenu
notificationBtnDOM.onclick = () => {
  openedMenu = notificationPopupDOM
  toggleMenu(notificationPopupDOM)
}

userMenuBtnDOM.onclick = () => {
  openedMenu = userMenuPopupDOM
  toggleMenu(userMenuPopupDOM)
}

overlayDOM.onclick = () => {
  toggleMenu(openedMenu)
}

const toggleMenu = (menu) => {
  menu.classList.toggle('show')
  overlayDOM.classList.toggle('show')
  // console.log(openedMenu.classList[0])
  // if (openedMenu.classList[0] == 'notification-popup') {
  //   userMenuBtnDOM.disabled = true
  //   console.log('1')
  // } else {
  //   notificationBtnDOM.disabled = true
  //   console.log('2')
  // }
}

test.onclick = () => {
  console.log('hello')
}

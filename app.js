// HEADER
const searchFormDOM = document.querySelector('.search-form')
const searchInputDOM = document.querySelector('.search-form > input')
const notificationBtnDOM = document.querySelector('.notification>button')
const userMenuBtnDOM = document.querySelector('.user-profile>button')
const overlayDOM = document.querySelector('.overlay')
const notificationPopupDOM = document.querySelector('.notification-popup')
const userMenuPopupDOM = document.querySelector('.user-menu-popup')

// PAGE CONTENT
const closeSelectPlanDOM = document.querySelector('.select-plan > button')
const selectPlanDOM = document.querySelector('.select-plan')
const onboardingHeadDOM = document.querySelector('.onboarding-head')
const toggleOnboardingDOM = document.querySelector('.onboarding-head > button')
const onboardingStepsDOM = document.querySelector('.onboarding-steps')
const stepsDOM = document.querySelectorAll('.onboarding-steps .steps')
const stepCounterDOM = document.querySelector('.onboarding-head>section>p>span')
const stepProgressDOM = document.querySelector(
  '.onboarding-head>section>article>span'
)

// console.log(stepsDOM)

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
notificationBtnDOM.onclick = (e) => {
  toggleNotifications()
  e.stopPropagation()
}

userMenuBtnDOM.onclick = (e) => {
  toggleUserMenu()
  e.stopPropagation()
}

// OPEN AND CLOSE NOTIFICATIONS
const toggleNotifications = () => {
  userMenuPopupDOM.classList.remove('show')
  notificationPopupDOM.classList.toggle('show')
}

// OPEN AND CLOSE NOTIFICATIONS
const toggleUserMenu = () => {
  notificationPopupDOM.classList.remove('show')
  userMenuPopupDOM.classList.toggle('show')
}

const closeAnyMenu = () => {
  notificationPopupDOM.classList.remove('show')
  userMenuPopupDOM.classList.remove('show')
}

// HANDLE KEYBOARD USE
window.onkeydown = (e) => {
  let pressedKey = e.key
  if (pressedKey == 'Escape') {
    closeAnyMenu()
  }
}

closeSelectPlanDOM.onclick = () => {
  selectPlanDOM.style.display = 'none'
}

// ONBOARDING
toggleOnboardingDOM.onclick = (e) => {
  closeAnyMenu()
  onboardingStepsDOM.classList.toggle('hide')
  if (onboardingStepsDOM.className.includes('hide')) {
    toggleOnboardingDOM.style.transform = 'rotate(180deg)'
    onboardingHeadDOM.style.cursor = 'pointer'
  } else {
    toggleOnboardingDOM.style.transform = 'rotate(0deg)'
    onboardingHeadDOM.style.cursor = 'unset'
  }
  e.stopPropagation()
}

onboardingHeadDOM.onclick = () => {
  closeAnyMenu()
  onboardingStepsDOM.classList.remove('hide')
  if (onboardingStepsDOM.className.includes('hide')) {
    toggleOnboardingDOM.style.transform = 'rotate(180deg)'
    onboardingHeadDOM.style.cursor = 'pointer'
  } else {
    toggleOnboardingDOM.style.transform = 'rotate(0deg)'
    onboardingHeadDOM.style.cursor = 'unset'
  }
}

// CLOSE ALL MENU WHEN ANYWHERE IS CLICKED
document.body.onclick = () => {
  closeAnyMenu()
}

stepsDOM[0].classList.add('show')
let count = 0
stepCounterDOM.textContent = count
stepProgressDOM.style.width = `${count * 20}%`

stepsDOM.forEach((dom) => {
  // const domBtn = dom.querySelector('.col2 > p')
  const checkBtn = dom.querySelector('.col1')
  dom.onclick = () => {
    stepsDOM.forEach((dom) => {
      dom.classList.remove('show')
    })
    dom.classList.add('show')
  }

  let done = false
  checkBtn.onclick = () => {
    const svgUndone = checkBtn.querySelector('svg:nth-child(1)')
    const svgDoing = checkBtn.querySelector('svg:nth-child(2)')
    const svgDone = checkBtn.querySelector('svg:nth-child(3)')
    if (done) {
      svgDone.classList.remove('show')
      svgUndone.classList.remove('hide')
      svgDoing.style.transform = 'rotate(0deg)'
      done = false
      count--
    } else {
      svgUndone.classList.add('hide')
      svgDoing.classList.add('show')
      setTimeout(() => {
        svgDoing.style.transform = 'rotate(360deg)'
        svgDoing.classList.remove('show')
        svgDone.classList.add('show')
      }, 200)
      done = true
      count++
    }
    stepCounterDOM.textContent = count
    stepProgressDOM.style.width = `${count * 20}%`
  }
})

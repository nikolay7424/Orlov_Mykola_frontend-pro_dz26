const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    const closeBtn = alertPlaceholder.querySelector('[data-bs-dismiss="alert"]')
    if(closeBtn) {
      closeBtn.click()
    } else {
      appendAlert('Nice, you triggered this alert message!', 'success')
    }
  })
}

// momentJS

// my bday
const bdayEl = document.getElementById('b-day')
bdayEl.textContent = moment('1994-11-11').format('llll')

// user bday
const userBdayEl = document.getElementById('your-b-day')
const userBdayInput = document.getElementById('bday-input')
userBdayInput.addEventListener('change', function() {
  userBdayEl.textContent = moment(userBdayInput.value).format('YYYY-MM-DD')
})



const userBdayTextEl = document.getElementById('your-b-day-text')
const userBdayInputText = document.getElementById('bday-input-text')
const regex = /\d{2}\-\d{2}-\d{4}/i

;(() => {
  'use strict'

  const forms = document.querySelectorAll('.needs-validation')

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!validateUserInput(userBdayInputText.value, regex)) {
        event.preventDefault()
        event.stopPropagation()
        userBdayInputText.classList.remove('is-valid')
        userBdayInputText.classList.add('is-invalid')
      } else {
        event.preventDefault()
        event.stopPropagation()
        userBdayInputText.classList.remove('is-invalid')
        userBdayInputText.classList.add('is-valid')
      }
    }, false)
  })
})()


function validateUserInput(userInput, regex) {
  if(userInput.match(regex)) {
    userBdayTextEl.textContent = moment(userBdayInputText.value).format('DD-MM-YYYY')
    return true
  } else {
    return false
  }
}
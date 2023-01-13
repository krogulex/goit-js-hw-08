import _ from 'lodash';

const email = document.querySelector("input")
const textarea = document.querySelector("textarea")
const submit = document.querySelector("submit")
const form = document.querySelector(".feedback-form")

const data = {
    email:'',
    textarea:'',
}


function getData () {

    data.email = email.value
    data.textarea = textarea.value

    localStorage.setItem("feedback-form-state", JSON.stringify(data))
}


form.addEventListener("input", _.throttle(getData, 500))

const savedFeedback = localStorage.getItem("feedback-form-state")
const parsedFeedback = JSON.parse(savedFeedback)

if (parsedFeedback && parsedFeedback.email) {
    if (parsedFeedback.email === '') {
      email.value = ''
    } else {
      email.value = parsedFeedback.email
    }
  }

  if (parsedFeedback && parsedFeedback.textarea) {
    if (parsedFeedback.textarea === '') {
      textarea.value = ''
    } else {
      textarea.value = parsedFeedback.textarea
    }
  }

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const submittedData = JSON.parse(localStorage.getItem("feedback-form-state"))
    console.log(submittedData)
    email.value = ''
    textarea.value = ''
    localStorage.removeItem("feedback-form-state");
})


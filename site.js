
//Dynamic welcome, week 3
const welcomeMessage = document.querySelector('#welcome'); //grab welcome div
const welcomeMessageH1 = welcomeMessage.querySelector('h1'); //grab welcome div

const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

if (isMorning) {
    welcomeMessageH1.textContent = "Good Morning"
} else if (isAfternoon) {
    welcomeMessageH1.textContent = "Good Afternoon"
} else if (isEvening) {
    welcomeMessageH1.textContent = "Good Evening"
}

//week 4 secret messages
const key = 'user input'
const span = document.querySelector('span')
const userInput = document.querySelector('#input')
const button = document.querySelector('button')

button.addEventListener('click', () => {
    localStorage.setItem(key, userInput.value)
})

if (localStorage.getItem(key) == "It's a secret to everybody.") {
    localStorage.setItem("Secret Message", "Zelda?")
}
const storedValue = localStorage.getItem("Secret Message") || 'Enter Secret Code'
span.textContent = storedValue

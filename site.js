
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
localStorage.setItem("Secret", "It's a secret to everybody.")

//WEEK 6
const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

showImages()

setInterval(() => {
    // code to run EVERY 5 seconds
    currentImage += 1
    if (currentImage >= 5){
        currentImage = 0
    }
    showImages()
}, 5000)

const prev = document.querySelector('#prev')
const next = document.querySelector('#next')
prev.addEventListener('click', () => {
    currentImage -= 1;
    if (currentImage < 0) {
        currentImage = 4;
    }
    showImages();
});

next.addEventListener('click', () => {
    currentImage += 1;
    if (currentImage >= 5) {
        currentImage = 0;
    }
    showImages();
});
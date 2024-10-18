
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

//WEEK 7
//get button, input box, and ul contents
const todoList = document.querySelector('.todo-list');
const input = document.querySelector('#new-todo');
const addButton = document.querySelector('button');

// renderTodos of the list
const renderTodos = () => {
    // Get the list from local storage
    const todos = JSON.parse(localStorage.getItem('todo-list')) || [];
    // Clear the li's before we recreate them (will add all the items a second time if not done)
    todoList.innerHTML = '';

    // Create and add new list items to the DOM for  each todo
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.textContent = todo.text;
        li.classList.add('todo');
        todoList.appendChild(li);
    });
};

//loads list when page is open
renderTodos();

// listens for button press
addButton.addEventListener('click', () => {
    // Get the list from local storage OR load default data
    const todos = JSON.parse(localStorage.getItem('todo-list')) || [];
    // Add new item to the list
    todos.push({ text: input.value, completed: false });
    // Save the updated list to local storage
    localStorage.setItem('todo-list', JSON.stringify(todos));

    // render the list again to show change
    renderTodos();
    // clear user input for next item
    input.value = '';
})

//WEEK 8

const getRandomPokemon = async () => {
    //Rand poke api url
    const url = 'https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 150)
    //response and object return
    const pokeLink = await fetch(url);
    const pokemon = await pokeLink.json()
    return pokemon;
}

const renderPokemon = (pokemon) => {
    //Image Div
    const parentElement = document.querySelector('.poke');

    const img = document.createElement('img')
    img.src = pokemon.sprites.front_default; //poke api sprite
    img.alt = pokemon.name; //poke api name
    parentElement.append(img)
}

//async to call functions from api??
(async () => {
    const pokemon = await getRandomPokemon();
    renderPokemon(pokemon);
  })();

////////////////////////////////////////////////////////////////
//getRandomPokemon().then(pokemon -> renderPokemon(pokemon)) XXXXXXXX

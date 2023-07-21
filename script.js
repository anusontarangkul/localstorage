// Get a reference to the counter element
var counterElement = document.getElementById('counter');

// Get references to the increment and decrement buttons
var incrementButton = document.getElementById('incrementButton');
var decrementButton = document.getElementById('decrementButton');

// Initialize the counter value
var counterValue = 0;

if (localStorage.getItem("count")) {
    counterValue = localStorage.getItem("count");
}

// Update the counter display
function updateCounter() {
    counterElement.textContent = counterValue;
}

// Increment the counter
function incrementCounter() {
    counterValue++;
    updateCounter();
    saveToLocalStorage();
}

// Decrement the counter
function decrementCounter() {
    counterValue--;
    updateCounter();
    saveToLocalStorage();
}

function saveToLocalStorage() {
    localStorage.setItem("count", counterValue)
}

// Attach event listeners to the buttons
incrementButton.addEventListener('click', incrementCounter);
decrementButton.addEventListener('click', decrementCounter);

// Update the counter display initially
updateCounter();

// localStorage.setItem("lastname", "Smith");
// console.log(localStorage.getItem("lastname"));
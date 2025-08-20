// Calculator Functions
const display = document.getElementById("display")

// Add the value to visually be displayed.
function appendToDisplay(input) {
    display.value += input;
}

// When the user presses "C", it will clear the display.
function clearDisplay() {
    display.value = "";
}

// This function calculates the possible operations.
function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = "Error";
    }
}
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

// When the user presses "DEL", it will delete the last character entered.
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// When the user presses "+/-", it will change the sign of the last number entered.
function changeSign() {
    // If the display is empty, just return
    if (display.value === "") return;

    // Try to parse the last number entered
    let match = display.value.match(/(-?\d+\.?\d*)$/);
    if (match) {
        let number = parseFloat(match[0]);
        let toggled = -number;
        display.value = display.value.slice(0, match.index) + toggled;
    }
}

// This function calculates the possible operations.
function calculate() {
    try {
        let expression = display.value;

        // Replace ^ with ** for exponentiation
        expression = expression.replace(/\^/g, "**");

        display.value = eval(expression);
    }
    catch(error) {
        display.value = "Error";
    }
}
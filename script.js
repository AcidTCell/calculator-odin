const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const division = function(a,b) {
  return a/b;
}

const multiply = function(a,b) {
  return a*b;
}


function operate(operator,a,b){
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return "Error: Invalid operator";
    }
}

// Store the display value
let displayValue = '';
let firstNumber = '';
let operator = '';
let secondNumber = '';

// Function to handle number button clicks
function handleNumberClick(number) {
    // Append the clicked number to the display value
    displayValue += number;
    // Update the display element with the new value
    updateDisplay(displayValue);
}

function handleOperatorClick(selectedOperator) {
    // If the first number is not set, set it to the current display value
    if (firstNumber === '') {
        firstNumber = parseFloat(displayValue);
        operator = selectedOperator;
        displayValue = ''; // Clear the display for the second number
    } else {
        // If the first number and operator are set, calculate the result
        secondNumber = parseFloat(displayValue);
        const result = operate(operator, firstNumber, secondNumber);
        // Update the display with the result
        updateDisplay(result);
        // Store the result as the first number for subsequent operations
        firstNumber = result;
        operator = selectedOperator;
        displayValue = ''; // Clear the display for the second number
    }
}

function handleEqualsClick() {
    // If all necessary values are set, perform the operation
    if (firstNumber !== '' && operator !== '' && displayValue !== '') {
        secondNumber = parseFloat(displayValue);
        const result = operate(operator, firstNumber, secondNumber);
        // Update the display with the result
        updateDisplay(result);
        // Clear the stored values for the next operation
        firstNumber = '';
        operator = '';
        secondNumber = '';
    }
}

function handleClearClick(){
    displayValue = '';
    firstNumber = '';
    operator = '';
    secondNumber = '';

}

// Function to update the display element
function updateDisplay(value) {
    // Get the display element
    const display = document.querySelector('.display');
    // Update the value of the display element
    display.value = value;
}

// Attach click event listeners to number buttons
document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', () => {
        // Get the value of the clicked number button
        const number = button.value;
        // Call the function to handle the click event
        handleNumberClick(number);
    });
});





// Attach click event listeners to operator buttons
document.querySelectorAll('.operator').forEach(button => {
    button.addEventListener('click', () => {
        const selectedOperator = button.value;
        handleOperatorClick(selectedOperator);
    });
});

// Attach click event listener to equals button
document.querySelector('.equals').addEventListener('click', handleEqualsClick);

document.querySelector('.clear').addEventListener('click', handleClearClick);
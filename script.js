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

let displayValue = '';
let firstNumber = '';
let operator = '';
let secondNumber = '';


function handleNumberClick(number) {
    displayValue += number;
    updateDisplay(displayValue);
}

function handleOperatorClick(selectedOperator) {
    if (firstNumber === '') {
        firstNumber = parseFloat(displayValue);
        operator = selectedOperator;
        displayValue = ''; 
    } else {
        secondNumber = parseFloat(displayValue);
        const result = operate(operator, firstNumber, secondNumber);
        updateDisplay(result);
        firstNumber = result;
        operator = selectedOperator;
        displayValue = ''; //This doesn't actually clear the display directly
    }
}

function handleEqualsClick() {
    // If all necessary values are set, perform the operation
    if (firstNumber !== '' && operator !== '' && displayValue !== '') {
        secondNumber = parseFloat(displayValue);
        const result = operate(operator, firstNumber, secondNumber);
        updateDisplay(result); //This actually updates display
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
    updateDisplay(displayValue);

}

// Function to update the display element
function updateDisplay(value) {
    const display = document.querySelector('.display');
    display.value = value;
}

// Attach click event listeners to number buttons
document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', () => {
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

//Same for clear button
document.querySelector('.clear').addEventListener('click', handleClearClick);
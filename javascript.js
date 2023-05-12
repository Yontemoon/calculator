
const butOperators = document.querySelector('#butOperators');
const showDisplay = document.querySelector('#showDisplay');
const butNumbers = document.querySelector('#butNumbers')

const butEqual = document.querySelector('#butEqual');
const butClear = document.querySelector('#butClear');

let num1 = 0;
let isFirstName = true;
let num2 = 0;
let getEqualNum = 0;
let operator = "";

function add() {
    getEqualNum = Math.round((Number(num1) + Number(num2))*100)/100;
    showDisplay.innerHTML = getEqualNum;
    num1 = getEqualNum;
    return getEqualNum
}

function subtract() {
    getEqualNum = Math.round((Number(num1) - Number(num2))*100)/100;
    showDisplay.innerHTML = getEqualNum;
    num1 = getEqualNum;
    return getEqualNum;
}

function multiply() {
    getEqualNum = MMath.round((Number(num1) * Number(num2))*100)/100;
    showDisplay.innerHTML = getEqualNum;
    num1 = getEqualNum;
    return getEqualNum;
} 

function divide() {
    getEqualNum = Math.round((Number(num1) / Number(num2))*100)/100;
    showDisplay.innerHTML = getEqualNum;
    if (num2 ===  "0") {
        showDisplay.innerHTML = "DIVIDE BY 0 ERROR";
    }
    num1 = getEqualNum;
    return getEqualNum;
}

// Do you really need? 
function operate(num1, num2, operator) {

}




butNumbers.addEventListener('click', (e) => {
    if (operator === "") {
        if (isFirstName === true) {
           num1 = showDisplay.innerHTML += e.target.innerHTML;
        } 
    } 
    if (operator === "+" || 
        operator === "*" ||  
        operator === "-" ||  
        operator === `/`) {
            if (showDisplay.innerHTML === "+" || 
                showDisplay.innerHTML === "*" ||  
                showDisplay.innerHTML === "-" ||  
                showDisplay.innerHTML === `/` ) {
                    showDisplay.innerHTML = "";
                };
            isFirstName = false;
            num2 = showDisplay.innerHTML += e.target.innerHTML;
            num2 = num2.replace("+", "");
            num2 = num2.replace("-", "");
            num2 = num2.replace("*", "");
            num2 = num2.replace("/", "");
    }
});


butOperators.addEventListener('click', (e) => {
    operator = showDisplay.innerHTML = e.target.innerHTML;
})

butEqual.addEventListener('click', () => {
    if (operator === "+") {
        add(num1, num2);
    } else if (operator === "-") {
        subtract(num1, num2);
    } else if (operator === "*") {
        multiply(num1, num2);
    } else if (operator === "/") {
        divide(num1, num2);
    } else {
     // Something.   
    }
})


butClear.addEventListener('click', () => {
    num1 = 0;
    isFirstName = true;
    num2 = 0;
    getEqualNum = 0;
    operator = "";
    showDisplay.innerHTML = "";
})

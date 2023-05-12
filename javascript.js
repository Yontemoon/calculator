
const butOperators = document.querySelector('#butOperators');
const showDisplay = document.querySelector('#showDisplay');
const butNumbers = document.querySelector('#butNumbers');
const butEqual = document.querySelector('#butEqual')
let num1 = 0;
let firstNum = true;
let num2 = 0;
let getEqualNum = 0;
let operator = "";

function add() {
    getEqualNum = Number(num1) + Number(num2);
    showDisplay.innerHTML = getEqualNum;
    return getEqualNum
}

function subtract() {
    getEqualNum = Number(num1) - Number(num2);
    showDisplay.innerHTML = getEqualNum;
    return getEqualNum;
}

function multiply() {
    getEqualNum = Number(num1) * Number(num2);
    showDisplay.innerHTML = getEqualNum;
    return getEqualNum;
} 

function divide() {
    getEqualNum = Number(num1) / Number(num2);
    showDisplay.innerHTML = getEqualNum;
    return getEqualNum;
}

function operate(num1, num2, operator) {

}




butNumbers.addEventListener('click', (e) => {
    if (operator === "") {
        if (firstNum === true) {
           num1 = showDisplay.innerHTML += e.target.innerHTML;
        } 
    } 
    if (operator === "+" || operator === "*" ||  operator === "-" ||  operator === `/`){
        firstNum = false;
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




const butOperators = document.querySelector('#butOperators');
const showDisplay = document.querySelector('#showDisplay');
const butNumbers = document.querySelector('#butNumbers');
const butEqual = document.querySelector('#butEqual')
let num1 = 0;
let firstNum = true;
let num2 = 0;
let operator = "";

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
} 

function divide(num1, num2) {
    return num1 / num2;
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


butOperators.addEventListener('click', function(e) {
    operator = showDisplay.innerHTML = e.target.innerHTML;
    console.log(typeof operator);

    // num2Button();
})


// function num2Button() {
//     butNumbers.addEventListener('click', (f) => {
//         num2 = showDisplay.innerHTML += f.target.innerHTML;
//     });
// }
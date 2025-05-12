const display = document.createElement("a");
display.classList.add("display");
const displayContainer = document.querySelector(".display-container0");
displayContainer.append(display);
let displayContent = display.textContent;

const btnOperandArray = document.querySelectorAll("[data-operand]");
btnOperandArray.forEach(function (btnOperand) {
    btnOperand.addEventListener("click", () => {
        displayContent = display.textContent;
        let lastCharOfDisplay = displayContent[displayContent.length - 1];
        if (['*', '%', '+', '-', '/'].includes(lastCharOfDisplay)) {
            return;
        }
        else if (display.textContent === '') {
            return;
        } else {

            displayContent += btnOperand.textContent;
            display.textContent = displayContent;
        }
    })
})

const btnAc = document.getElementById('AC');
btnAc.addEventListener("click", () => {
    display.textContent = '';
});

let number;
const btnNumberArray = document.querySelectorAll(".number");
btnNumberArray.forEach((btnNumber) => {
    btnNumber.addEventListener("click", () => {
        const btnNumberTextContent = btnNumber.textContent;
        display.textContent += btnNumberTextContent;
    })
});



const btnEquals = document.getElementById('equals');
btnEquals.addEventListener("click", () => {
    const displayContent = display.textContent;
    let splitDisplayArray = displayContent.split(/[\+\-\*\/%]/);
    console.log(splitDisplayArray);
});



const add = function (...args) {
};

const sub = function (...args) {

};

const multiply = function (...args) {

};

const div = function (...args) {

};

const percent = function (...args) {

};


console.log(number);
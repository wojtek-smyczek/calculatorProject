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

let result;
function evaluateExpression(array) {


    while (array.length > 1) {

        let num1 = array[0];
        let num2 = array[2];
        num1 = Number(num1);
        num2 = Number(num2);

        switch (array[1]) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                result = num1 / num2;
                break;
            case "%":
                result = num1 % num2;
                break;
        }
        array.splice(0, 3, result);
    }
    console.log(result);
    return result = array[0];
};

const btnEquals = document.getElementById('equals');
btnEquals.addEventListener("click", () => {
    displayContent = display.textContent;
    let splitDisplayArray = displayContent.split(/(?<=[\d])(?=[\+\-\*\/%])|(?<=[\+\-\*\/%])(?=[\d])/);
    evaluateExpression(splitDisplayArray);
    display.textContent = result;
});




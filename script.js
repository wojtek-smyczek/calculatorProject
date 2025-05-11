const display = document.createElement("a");
const displayContainer = document.querySelector(".display-container0");
displayContainer.append(display);



const btnNumberArray = document.querySelectorAll(".number");
btnNumberArray.forEach((btnNumber) => {
    btnNumber.addEventListener("click", () => {
        const btnNumberTextContent = btnNumber.textContent;
        display.textContent = btnNumberTextContent;
    })
});


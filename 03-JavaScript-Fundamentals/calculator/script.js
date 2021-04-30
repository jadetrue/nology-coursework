class Calculator {
    constructor(previousNumberTextElement, currentNumberTextElement) {
        this.previousNumberTextElement = previousNumberTextElement
        this.currentNumberTextElement = currentNumberTextElement
        this.clear()
    }

    clear() {
        this.currentNumber = ''
        this.previousNumber = ''
        this.operation = undefined
    }

    delete() {

    }

    appendNumber(numbers) {
        if (numbers === '.' && this.currentNumber.includes('.')) return
        this.currentNumber = this.currentNumber.toString() + numbers.toString()
    }

    chooseOperation(operation) {

    }

    compute() {

    }

    updateOutput() {
        this.currentNumberTextElement.innerText = this.currentNumber
    }
}

const numbers = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');

const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-allclear]');
const equals = document.querySelector('[data-equals]');

const currentNumberTextElement = document.querySelector('[data-current-number]');
const previousNumberTextElement = document.querySelector('[data-previous-number]');

const calculator = new Calculator(previousNumberTextElement, currentNumberTextElement)

numbers.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateOutput();
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateOutput();
    })
})
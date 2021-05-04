class Calculator {
    constructor(previousNumberTextElement, currentNumberTextElement) {
        this.currentNumberTextElement = currentNumberTextElement
        this.previousNumberTextElement = previousNumberTextElement
        this.clear()
    }

    clear() {
        this.currentNumber = ''
        this.previousNumber = ''
        this.operation = undefined
        this.previousNumberTextElement.innerText = ''
        this.currentNumberTextElement.innerText = ''
    }

    delete() {
        this.currentNumber = this.currentNumber.toString().slice(0, -1)
    }

    appendNumber(numbers) {
        if (numbers === '.' && this.currentNumber.includes('.')) return
        this.currentNumber = this.currentNumber.toString() + numbers.toString()
    }

    chooseOperation(operation) {
        if(this.currentNumber === '') return
        if(this.previousNumber !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousNumber = this.currentNumber
        this.currentNumber = ''
    }

    compute() {
        let computation
        const prev = parseFloat(this.previousNumber)
        const current = parseFloat(this.currentNumber)

        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case '+': 
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '÷':
                computation = prev / current
                break
            case '*':
                computation = prev * current
                break
            default:
                return
        }
        this.currentNumber = computation
        this.operation = undefined
        this.previousNumber = ''
    }

    getDisplayNumber(numbers) {
        const stringNumber = numbers.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]

        let integerOutput

        if (isNaN(integerDigits)) {
            integerOutput = ''
        } else {
            integerOutput = integerDigits.toLocaleString('en', {
                maximumFractionDigits: 0
            })
        }

        if (decimalDigits != null) {
            return `${integerOutput}.${decimalDigits}`
        } else {
            return integerOutput
        }

    }

    updateOutput() {
        this.currentNumberTextElement.innerText = 
            this.getDisplayNumber (this.currentNumber)
        if (this.operation != null) {
            this.previousNumberTextElement.innerText = 
            `${this.getDisplayNumber(this.previousNumber)} ${this.operation}`
        } else {
            this.previousNumberTextElement.innerText = ''
        }
        
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

allClearButton.addEventListener('click', () => {
    calculator.clear();
})

equals.addEventListener('click', button => {
    calculator.compute();
    calculator.updateOutput();
})

deleteButton.addEventListener('click', button => {
    calculator.delete();
    calculator.updateOutput();
})
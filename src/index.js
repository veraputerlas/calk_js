const tablo = document.querySelector('.tablo')
const buttons = document.querySelector('.buttons')

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ","]
const controlers = ["+/-", "%", "/", "*", "-", "+", ",", "="]
const res = ["AC"]

let num1 = 0
let num2 = 0
let operator = ''

buttons.addEventListener('click', (event) => {
    let contex = event.target.innerText
    if (numbers.includes(contex) && operator == '') {
        if (tablo.value == 0) tablo.value = contex;
        else tablo.value += contex;
            num1 = +tablo.value;
        }     
    if (numbers.includes(contex) && operator != '') {
        if (tablo.value == 0) tablo.value = contex
        else tablo.value += contex
        num2 = +tablo.value
    }
    if (controlers.includes(contex)) {
        operator = contex
        tablo.value = 0
    }
    if (num1 != 0 && num2 != 0 && operator != '') {
        tablo.value = calc(num1, num2, operator)
        num1 = +tablo.value
        num2 = 0
    }
    if (res.includes(contex)) {
        num1 = 0;
        num2 = 0;
        operator = 0;
        tablo.value = 0;
        
    }

    console.log(`num1: ${num1}`)
    console.log(`num2: ${num2}`)
    console.log(`operator: ${operator}`)
})

function calc(number1, number2, operator) {
    switch (operator) {
        case "+":
            return +number1 + +number2
        case "-":
            return +number1 - +number2
        case "*":
            return +number1 * +number2
        case "/":
            return +number1 / +number2

    }
}
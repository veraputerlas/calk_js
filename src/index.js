const tablo = document.querySelector('.tablo');
const buttons = document.querySelector('.buttons');

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ','];
const controlers = ['%', '/', '*', '-', '+'];
const res = ['AC'];
const minus = ['+/-'];

let buffer = 0;
let operator = '';

buttons.addEventListener('click', (event) => {
  let contex = event.target.innerText;

  if (controlers.includes(contex)) {
    buffer = 0;
    operator = contex;
  }

  if (res.includes(contex)) {
    buffer = 0;
    operator = '';
    tablo.value = 0;
  }

  if (minus.includes(contex)) {
    tablo.value = -tablo.value;
  }

  if (numbers.includes(contex)) {
    if (contex === ',' && tablo.value.includes(',')) {
      return;
    }

    if (operator) {
      if (buffer == 0) {
        buffer = tablo.value;
        tablo.value = contex;
      } else if (tablo.value == 0) {
        tablo.value = contex;
      } else {
        tablo.value += contex;
      }
    } else {
      if (buffer == 0) {
        buffer = contex;
      } else {
        buffer += contex;
      }
      tablo.value = buffer;
    }
  }

  if (operator && contex == '=') {
    tablo.value = convertSeparator(calc().toFixed(2), true).replace(/\,0+$/, '');
    operator = '';
  }
})

function calc() {
  let a = convertSeparator(buffer);
  let b = convertSeparator(tablo.value);

  switch (operator) {
    case '+':
      return +a + +b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
    case '%':
      return a % b;
  }
}

function convertSeparator(value, reverse) {
  return reverse ? value.toString().replace('.', ',') : value.toString().replace(',', '.');
}

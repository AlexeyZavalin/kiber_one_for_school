const firstNumber = document.getElementById('first_number');
const secondNumber = document.getElementById('second_number');

firstNumber.value = 0;
secondNumber.value = 0;

const btns = document.querySelectorAll('.calculator_btn');
const resultContainer = document.querySelector('.calculator_result');

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', clickHandler);
}
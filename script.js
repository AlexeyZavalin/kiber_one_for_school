const firstNumber = document.getElementById('first_number');
const secondNumber = document.getElementById('second_number');

firstNumber.value = 0;
secondNumber.value = 0;

const btns = document.querySelectorAll('.calculator__btn');
const resultContainer = document.querySelector('.calculator__result');


for (i = 0; i < btns.length; ++i) {
    btns[i].addEventListener('click', function (e) {
        const sign = e.target.dataset['sign'];
        let first = Number(firstNumber.value);
        let second = Number(secondNumber.value);
        resultContainer.innerHTML = calculate(first, second, sign);
    });
}
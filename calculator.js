function calculate(firstNumber, secondNumber, operator) {
    let result = '0';
    if (secondNumber == 0 && operator == '/') {
        return 'На 0 делить нельзя';
    }
    if (firstNumber !== '' && secondNumber !== '') {
        switch (operator) {
            case '+':
                result = firstNumber + secondNumber;
                break;
            case '-':
                result = firstNumber - secondNumber;
                break;
            case '*':
                result = firstNumber * secondNumber;
                break;
            case '/':
                result = firstNumber / secondNumber;
                break;
            default:
                break;
        }
    }
    return result;

}

function clickHandler(e) {
    const sign = e.target.dataset['operator'];
    let first = Number(firstNumber.value);
    let second = Number(secondNumber.value);
    resultContainer.innerHTML = calculate(first, second, sign);
}
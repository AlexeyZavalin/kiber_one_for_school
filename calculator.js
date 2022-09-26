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
let resultField = document.getElementById('result');

function appendNumber(number) {
    resultField.value += number;
}

function appendOperator(operator) {
    resultField.value += operator;
}

function clearResult() {
    resultField.value = '';
}

function calculateResult() {
    try {
        resultField.value = eval(resultField.value);
    } catch (error) {
        resultField.value = 'Erro';
    }
}

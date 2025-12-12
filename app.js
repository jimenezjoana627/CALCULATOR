const display = document.getElementById('display');
const buttons = document.getElementById('buttons');

let currentInput = '';
let operator = '';
let firstValue = null;

buttons.addEventListener('click', e => {
    const btn = e.target;
    const value = btn.textContent;
    const action = btn.dataset.action;

    if (!btn.matches('button')) return;

    switch(action) {
        case 'clear':
            currentInput = '';
            operator = '';
            firstValue = null;
            display.textContent = '0';
            break;
        case 'delete':
            currentInput = currentInput.slice(0, -1);
            display.textContent = currentInput || '0';
            break;
        case 'add':
        case 'subtract':
        case 'multiply':
        case 'divide':
            if (currentInput) {
                firstValue = parseFloat(currentInput);
                operator = action;
                currentInput = '';
            }
            break;
        case 'equals':
            if (firstValue !== null && currentInput) {
                const secondValue = parseFloat(currentInput);
                let result;
                switch(operator) {
                    case 'add': result = firstValue + secondValue; break;
                    case 'subtract': result = firstValue - secondValue; break;
                    case 'multiply': result = firstValue * secondValue; break;
                    case 'divide': result = firstValue / secondValue; break;
                }
                display.textContent = result;
                currentInput = result.toString();
                firstValue = null;
                operator = '';
            }
            break;
        default:
            currentInput += value;
            display.textContent = currentInput;
    }
});

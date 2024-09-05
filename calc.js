(function() {
    let screen = document.querySelector('.displayScreen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    let currentValue = '';
    let operator = '';
    let previousValue = '';

    function calculate(a, b, op) {
        a = parseFloat(a);
        b = parseFloat(b);
        switch(op) {
            case '+': return a + b;
            case '-': return a - b;
            case '*': return a * b;
            case '/': return b !== 0 ? a / b : 'Error';
            default: return b;
        }
    }

    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.num;
            if (value !== undefined) {
                if (['+', '-', '*', '/'].includes(value)) {
                    operator = value;
                    previousValue = currentValue;
                    currentValue = '';
                } else {
                    currentValue += value;
                }
                screen.value = currentValue;
            }
        });
    });

    equal.addEventListener('click', function() {
        if (currentValue && previousValue && operator) {
            let result = calculate(previousValue, currentValue, operator);
            screen.value = result;
            currentValue = result.toString();
            previousValue = '';
            operator = '';
        }
    });

    clear.addEventListener('click', function() {
        currentValue = '';
        previousValue = '';
        operator = '';
        screen.value = '';
    });
})();
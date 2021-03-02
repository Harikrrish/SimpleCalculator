export const calculation = (inputValue) => {

    const operatorFunctions = {
        '+': (a, b) => {
            return a + b;
        },
        '-': (a, b) => {
            return a - b;
        },
        '*': (a, b) => {
            return a * b;
        },
        '/': (a, b) => {
            return a / b;
        }
    };

    let calcArrayUpdated = inputValue.split(/(\+|-|\*|\/)/g);
    let result = 0;
    let operator = '+';

    for (let i = 0; i < calcArrayUpdated.length; i++) {
        let item = calcArrayUpdated[i];
        let isOperator = /(\+|-|\*|\/)/.test(item);

        if (isOperator) {
            operator = item;
        } else {
            result = operatorFunctions[operator](result, parseInt(item));
        }
    }

    return result;
}
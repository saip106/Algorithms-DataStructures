'user strict';

var Stack = require('./stack');

function ArithmeticExpression () {
}

ArithmeticExpression.prototype.evaluate = function (expression) {
    var operandsStack = new Stack();
    var operatorsStack = new Stack();

    var parts = expression.split(' ');
    for (var i = 0; i < parts.length; i++) {
        if (parts[i] === '(') {
            //do nothing
        } else if (parts[i] === '*' | parts[i] === '+') {
            operatorsStack.push(parts[i]);
        } else if (parts[i] === ')') {
            var operator = operatorsStack.pop();
            if (operator === '+') {
                var first = operandsStack.pop();
                var second = operandsStack.pop();
                operandsStack.push(first + second);
            } else if (operator === '*') {
                operandsStack.push(operandsStack.pop() * operandsStack.pop());
            }
        } else {
            operandsStack.push(parseInt(parts[i]));
        }
    }
    return operandsStack.pop();
};

module.exports = ArithmeticExpression;

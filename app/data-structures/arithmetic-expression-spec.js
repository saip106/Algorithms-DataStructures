'user strict';

var ArithmeticExpression = require('./arithmetic-expression'),
    assert = require('assert');

describe('when evaluating a simple expression', function () {

    it('should successfully evaluate the expression', function () {
        var expression = new ArithmeticExpression();
        var result = expression.evaluate('( 2 + 1 )');
        assert.equal(result, 3);
    });

});
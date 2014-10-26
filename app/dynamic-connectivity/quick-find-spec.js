/*globals describe, it*/
'user strict';

var quickFind = require('./quick-find'),
    assert = require('assert');

describe('when checking to see if a point is connected to itself', function () {

    it('should find the connection', function () {
        var problemSet = new quickFind.ProblemSet();
        problemSet.initialize(5);

        var result = problemSet.areConnected(0, 0);
        assert.strictEqual(result, true);
    });

});

describe('when checking to see if two disconnected points are connected', function () {

    it('should not find the connection', function () {
        var problemSet = new quickFind.ProblemSet();
        problemSet.initialize(5);

        var result = problemSet.areConnected(0, 1);
        assert.strictEqual(result, false);
    });

});

describe('when checking to see if two connected points are connected', function () {

    it('should find the connection', function () {
        var problemSet = new quickFind.ProblemSet();
        problemSet.initialize(5);
        problemSet.connect(0, 1);

        var result = problemSet.areConnected(0, 1);
        assert.strictEqual(result, true);
    });

});
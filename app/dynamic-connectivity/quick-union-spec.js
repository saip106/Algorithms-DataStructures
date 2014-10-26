/*globals describe, it*/
'user strict';

var quickFind = require('./quick-union'),
    assert = require('assert');

describe('when checking to see if a point is connected to itself', function () {

    it('should find the connection', function () {
        var problemSet = new quickFind.ProblemSet();
        problemSet.initialize(5);

        var result = problemSet.areConnected(0, 0);
        assert.strictEqual(result, true);
    });

});

describe('when checking two connected points a and b', function () {

    var problemSet;
    beforeEach(function () {
        problemSet = new quickFind.ProblemSet();
        problemSet.initialize(5);
        problemSet.connect(0, 1);
    });

    it('should have a connection from a to b', function () {
        var result = problemSet.areConnected(0, 1);
        assert.strictEqual(result, true);
    });

    it('should have a connection from b to a', function () {
        var result = problemSet.areConnected(1, 0);
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

    var problemSet;
    beforeEach(function () {
        problemSet = new quickFind.ProblemSet();
        problemSet.initialize(5);
        problemSet.connect(0, 1);
    });

    describe('when the connected points have other connections', function () {

        beforeEach(function () {
            problemSet.connect(0, 2);
            problemSet.connect(1, 4);
            problemSet.connect(2, 1);
        });

        it('should find the connection', function () {
            assert.strictEqual(problemSet.areConnected(0, 1), true);
        });

        it('should maintain the new connections', function () {
            assert.strictEqual(problemSet.areConnected(0, 2), true);
            assert.strictEqual(problemSet.areConnected(1, 4), true);
            assert.strictEqual(problemSet.areConnected(2, 1), true);
        });

    });

    it('should find the connection', function () {

        var result = problemSet.areConnected(0, 1);
        assert.strictEqual(result, true);
    });

});
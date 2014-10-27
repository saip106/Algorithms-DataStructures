'user strict';

describe('Stack', function () {

    var Stack = require('./stack'),
        assert = require('assert');

    describe('when popping an item from an empty stack', function () {

        it('should throw an error', function () {
            var stack = new Stack();
            assert.throws(stack.pop, Error);
        });

    });

    describe('when accessing a stack', function () {

        it('should be able to push items onto it', function () {
            var stack = new Stack();
            assert.doesNotThrow(function () {
                stack.push();
            });
        });

    });

    describe('when popping items from a stack', function () {

        it('should get the last inserted item', function () {
            var stack = new Stack();
            stack.push('foo');
            stack.push('bar');
            assert.equal(stack.pop(), 'bar');
        });

        it('should remove the popped item', function () {
            var stack = new Stack();
            stack.push('foo');
            stack.push('bar');
            assert.equal(stack.pop(), 'bar');
            assert.equal(stack.pop(), 'foo');
        });

    });

    describe('when pushing a null onto stack', function () {

        it('should throw an error', function () {
            var stack = new Stack();
            assert.throws(function () {
                stack.push(null);
            }, Error);
        });

    });
});


'user strict';

var Queue = require('./queue'),
    assert = require('assert');

describe('when dequeuing an item from the queue', function () {

    it('should dequeue the first queued item', function () {
        var queue = new Queue();
        queue.enqueue('foo');
        queue.enqueue('bar');
        assert.equal(queue.dequeue(), 'foo');
    });

});

describe('when enqueuing a null onto a queue', function () {

    it('should throw an error', function () {
        var queue = new Queue();
        assert.throws(function () {
            queue.enqueue(null);
        }, Error);
    });

});

describe('when dequeuing an item from an empty queue', function () {

    it('should throw an error', function () {
        var queue = new Queue();
        assert.throws(queue.dequeue, Error);
    });

});

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
'user strict';

function Queue () {
    this.items = [];
}

Queue.prototype.enqueue = function (item) {
    if (item === null) {
        throw new Error('cannot add null to queue');
    }
    this.items.push(item);
};

Queue.prototype.dequeue = function () {
    if (this.items.length === 0) {
        throw new Error('no items to dequeue');
    }
    return this.items.splice(0, 1)[0];
};

Queue.prototype.getLength = function () {
    this.items.length;
};

module.exports = Queue;
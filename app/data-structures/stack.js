'user strict';

function Stack () {
    this.items = [];
}

Stack.prototype.pop = function () {
    if (this.items.length === 0) {
        throw new Error('no items to pop');
    }
    return this.items.splice(this.items.length - 1, 1)[0];
};

Stack.prototype.push = function (item) {
    if (item === null) {
        throw new Error('cannot add null to stack');
    }
    this.items.push(item);
};

module.exports = Stack;

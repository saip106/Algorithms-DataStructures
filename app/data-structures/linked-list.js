'user strict';

function LinkedList() {
    this.head = null;
    this.length = 0;
}

LinkedList.prototype.add = function (value) {
    if (this.head === null) {
        this.head = {
            value: value,
            next: null
        };
    } else {
        var current = this.head;
        while(current.next !== null) {
            current = current.next;
        }
        current.next = {
            value: value,
            next: null
        };
    }
    this.length++;
};

LinkedList.prototype.insert = function (value, index) {
    var currentIndex = 0, previousNode = null, currentNode = this.head;

    while(currentIndex < index) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        currentIndex++;
    }

    if (index === 0) {
        this.head = {
            value: value,
            next: this.head
        }
    } else {
        previousNode.next = {
            value: value,
            next: currentNode
        }
    }
    this.length++;
};

LinkedList.prototype.reverse = function () {
    if (this.length === 0 || this.length === 1) {
        return;
    }

    var previous = this.head, current = this.head.next;
    this.head.next = null;
    while(current.next !== null) {
        previous = current;
        current = current.next;

        current.next = previous;

    }
    this.head = current;
};

module.exports = LinkedList;
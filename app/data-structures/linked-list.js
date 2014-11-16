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

    var previous = null, current = this.head, next;
    while(current !== null) {
        next = current.next;
        current.next = previous;

        previous = current;
        current = next;
    }
    this.head = previous;
};

LinkedList.prototype.print = function () {
    var current = this.head, result = '';
    while(current !== null) {
        result += (result === '' ? '' : ',') + current.value;
        current = current.next;
    }
    return result;
};

LinkedList.prototype.reversePrint = function () {
    return internalPrint(this.head, '');
};

function internalPrint(node, printText) {
    if (node.next !== null) {
        printText = internalPrint(node.next, printText);
    }
    return printText + (printText === '' ? '' : ',') + node.value;
}

module.exports = LinkedList;
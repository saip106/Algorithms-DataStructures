'use strict';

function BinaryTree() {
    this._root = null;
}

BinaryTree.prototype.root = function () {
    return this._root;
}

BinaryTree.prototype.add = function (value) {
    if (this._root === null) {
        this._root = createNewNode(value);;
    } else {
        var current = this._root;
        while(true) {
            if (value <= current.value) {
                if (current.left === null) {
                    current.left = createNewNode(value);
                    break;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = createNewNode(value);
                    break;
                }
                current = current.right;
            }
        }
    }

};

function addTo(node, value) {
    if (node === null) {
        node = createNewNode(value);
    } else if (value <= node.value) {
        addTo(node.left, value);
    } else {
        addTo(node.right, value);
    }
}

function createNewNode(value) {
    return {
        value: value,
        left: null,
        right: null
    };
}

module.exports = BinaryTree;
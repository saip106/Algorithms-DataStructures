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

BinaryTree.prototype.count = function () {
    var _count = 0;
    this.traverse(function (node) {
        _count++;
    });
    return _count;
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

BinaryTree.prototype.traverse = function(processNode) {
    function touch(node) {
        if (node) {
            //node first
            processNode.call(this, node);

            //then left node
            if (node.left) {
                touch(node.left);
            }

            //then right node
            if (node.right) {
                touch(node.right);
            }
        }
    }
    touch(this._root);
};

function createNewNode(value) {
    return {
        value: value,
        left: null,
        right: null
    };
}

module.exports = BinaryTree;
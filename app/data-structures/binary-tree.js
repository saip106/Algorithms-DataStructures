'use strict';

function BinaryTree(root) {
    if (root) {
        this._root = root;
    } else {
        this._root = null;
    }
}

BinaryTree.prototype.root = function () {
    return this._root;
};

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
    this.breadthFirstTraverse(function (node) {
        _count++;
    });
    return _count;
};

BinaryTree.prototype.breadthFirstTraverse = function(processNode) {
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

BinaryTree.prototype.isBinarySearchTree = function () {
    return internalIsBST(this._root, Number.MIN_VALUE, Number.MAX_VALUE);
};

function internalIsBST(node, min, max) {
    if (node === null) {
        return true;
    }
    return min <= node.value && max > node.value &&
        internalIsBST(node.left, min, node.value) &&
        internalIsBST(node.right, node.value, max);
}

function createNewNode(value) {
    return {
        value: value,
        left: null,
        right: null
    };
}

module.exports = BinaryTree;
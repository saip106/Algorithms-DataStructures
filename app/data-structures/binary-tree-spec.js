'use strict';

var BinaryTree = require('./binary-tree'),
    assert = require('assert');

describe('Binary Tree', function () {

    it('should be able to create a binary tree with no elements', function () {
        var binaryTree = new BinaryTree();
        assert.ok(binaryTree);
    });

    it('should be able to create a binary tree with one element', function () {
        var binaryTree = new BinaryTree();
        binaryTree.add(5);

        assert.equal(binaryTree.root().value, 5);
    });


});
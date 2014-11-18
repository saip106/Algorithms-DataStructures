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

    it('should be able to create a binary tree with multiple element', function () {
        var binaryTree = new BinaryTree();
        binaryTree.add(5);
        binaryTree.add(2);
        binaryTree.add(8);
        binaryTree.add(3);
        binaryTree.add(7);

        assert.equal(binaryTree.root().value, 5);
    });

    describe('when working with binary tree with multiple elements', function () {

        it('should be able to get the number of nodes', function () {
            var binaryTree = new BinaryTree();
            binaryTree.add(5);
            binaryTree.add(2);
            binaryTree.add(8);
            binaryTree.add(3);
            binaryTree.add(7);

            assert.equal(binaryTree.count(), 5);
        });
    });

    describe('when checking a binary tree that is a BST', function () {

        it('should return true', function () {
            var binaryTree = new BinaryTree();
            binaryTree.add(5);
            binaryTree.add(2);
            binaryTree.add(8);
            binaryTree.add(3);
            binaryTree.add(7);

            assert.equal(binaryTree.isBinarySearchTree(), true);
        });

    });

    describe('when checking a binary tree that is not a BST', function () {

        it('should return false', function () {
            var binaryTree = new BinaryTree({
                left: {
                    left: null,
                    value: 6,
                    right: null
                },
                value: 5,
                right: {
                    left: null,
                    value: 8,
                    right: null
                }
            });

            assert.equal(binaryTree.isBinarySearchTree(), false);
        });

    });


});
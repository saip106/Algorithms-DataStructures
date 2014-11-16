'user strict';

describe('Linked List', function () {

    var LinkedList = require('./linked-list'),
        assert = require('assert');

    it('should be able to create a empty linked list', function () {
        var linkedList = new LinkedList();
        assert.ok(linkedList);
    });

    it('should be able to create a linked list with one element', function () {
        var linkedList = new LinkedList();
        linkedList.add(1);
        assert.ok(linkedList);
        assert.equal(linkedList.head.value, 1);
        assert.equal(linkedList.head.next, null);
    });

    it('should be able to create a linked list with two element', function () {
        var linkedList = new LinkedList();
        linkedList.add(1);
        linkedList.add(2);
        assert.ok(linkedList);

        var first = linkedList.head;
        assert.equal(first.value, 1);

        var second = first.next;
        assert.equal(second.value, 2);
        assert.equal(second.next, null);
    });

    it('should print the values of all elements', function () {
        var linkedList = new LinkedList();
        linkedList.add(1);
        linkedList.add(2);
        var result = linkedList.print();
        assert.equal(result, '1,2');
    });

    describe('when manipulating a linked list with multiple elements', function () {

        var linkedList;
        beforeEach(function() {
            linkedList = new LinkedList();
            linkedList.add(1);
            linkedList.add(2);
            linkedList.add(3);
        });

        it('should be able to insert an element at the beginning', function () {
            linkedList.insert(666, 0);
            var first = linkedList.head;
            assert.equal(first.value, 666);
            assert.equal(first.next.value, 1);
            assert.equal(linkedList.length, 4);
        });

        it('should be able to insert an element at a given index', function () {
            linkedList.insert(666, 2);
            var first = linkedList.head;
            var second = first.next;
            var third = second.next;
            assert.equal(third.value, 666);
            assert.equal(linkedList.length, 4);
        });
    });

    describe('when reversing a linked list', function () {

        it('should arrange the elements in the reverse order', function () {
            var linkedList = new LinkedList();
            linkedList.add(1);
            linkedList.add(2);
            linkedList.add(3);

            linkedList.reverse();

            var first = linkedList.head;
            var second = first.next;
            var third = second.next;

            assert.equal(first.value, 3);
            assert.equal(second.value, 2);
            assert.equal(third.value, 1);
        });

    });
});
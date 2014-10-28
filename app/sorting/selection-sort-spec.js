'user strict';

var selectionSort = require('./selection-sort'),
    assert = require('assert');

describe('Selection Sort', function () {

    describe('when sorting an empty array', function () {

        it('should return empty array', function () {
            var result = selectionSort.sort([]);
            assert.deepEqual(result, []);
        });

    });

    describe('when sorting an array of numbers', function () {

        it('should sort the array in ascending order', function () {
            var result = selectionSort.sort([9,7,6,4,3,2,1]);
            assert.deepEqual(result, [1,2,3,4,6,7,9]);
        });

    });

    describe('when sorting an array of strings', function () {

        it('should sort them alphabetically in ascending order', function () {
            var result = selectionSort.sort(['foo', 'bar', 'baz']);
            assert.deepEqual(result, ['baz', 'bar', 'foo']);
        });

    });

});
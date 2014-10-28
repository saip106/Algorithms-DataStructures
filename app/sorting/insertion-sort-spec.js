'user strict';

var insertionSort = require('./insertion-sort'),
    assert = require('assert');

describe('Insertion Sort', function () {

    describe('when sorting an empty array', function () {

        it('should return empty array', function () {
            var result = insertionSort.sort([]);
            assert.deepEqual(result, []);
        });

    });

    describe('when sorting an array of numbers', function () {

        it('should sort the array in ascending order', function () {
            var result = insertionSort.sort([9,6,7,4,3,2,1]);
            assert.deepEqual(result, [1,2,3,4,6,7,9]);
        });

    });

});
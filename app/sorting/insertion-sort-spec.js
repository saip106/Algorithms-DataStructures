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

    describe('when sorting an array or letters', function () {

        it('should return and fully sorted array', function () {
            var input = ['m','e','r','g','e','s','o','r','t','e','x','a','m','p','l','e'];
            insertionSort.sort(input);
            assert.deepEqual(input, ['a','e','e','e','e','g','l','m','m','o','p','r','r','s','t','x']);
        });

    });
});
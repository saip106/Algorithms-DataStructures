'use strict';

var mergeSort = require('./merge-sort'),
    assert = require('assert');

describe('Merge Sort', function () {

    describe('when sorting an empty array', function () {

        it('should return empty array', function () {
            var input = [];
            mergeSort.sort(input);
            assert.deepEqual(input, []);
        });

    });

    describe('when sorting an array of one element', function () {

        it('should return the same array', function () {
            var input = [1];
            mergeSort.sort(input);
            assert.deepEqual(input, [1]);
        });

    });

    describe('when sorting an array of two elements', function () {

        it('should return the sorted array', function () {
            var input = [2,1];
            mergeSort.sort(input);
            assert.deepEqual(input, [1,2]);
        });

    });

    describe('when sorting an array or random numbers', function () {

        it('should return and fully sorted array', function () {
            var input = [7,12,54,6,7,3,2,1];
            mergeSort.sort(input);
            assert.deepEqual(input, [1,2,3,6,7,7,12,54]);
        });

    });

    describe('when sorting an array or letters', function () {

        it('should return and fully sorted array', function () {
            var input = ['m','e','r','g','e','s','o','r','t','e','x','a','m','p','l','e'];
            mergeSort.sort(input);
            assert.deepEqual(input, ['a','e','e','e','e','g','l','m','m','o','p','r','r','s','t','x']);
        });

    });
});
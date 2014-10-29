'user strict';

var shellSort = require('./shell-sort'),
    assert = require('assert');

describe('Shell Sort', function () {

    describe('when sorting an empty array', function () {

        it('should return empty array', function () {
            var result = shellSort.sort([]);
            assert.deepEqual(result, []);
        });

    });

    describe('when sorting an array of numbers', function () {

        it('should sort the array in ascending order', function () {
            var result = shellSort.sort([9,6,7,4,3,2,1]);
            assert.deepEqual(result, [1,2,3,4,6,7,9]);
        });

    });

    describe('when sorting an array of strings', function () {

        it('should sort them alphabetically in ascending order', function () {
            var result = shellSort.sort(['foo', 'bar', 'baz']);
            assert.deepEqual(result, ['bar', 'baz', 'foo']);
        });

    });

});
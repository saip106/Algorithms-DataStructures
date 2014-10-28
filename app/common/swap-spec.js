'user strict';

var swap = require('./swap'),
    assert = require('assert');

describe('Swap', function () {

    describe('when swapping an element of an array with itself', function () {

        it('should not modify the array', function () {
            var result = swap([1,2,3], 1, 1);
            assert.deepEqual(result, [1,2,3]);
        });

    });

    describe('when swapping two elements of an array', function () {

        it('should not modify the array', function () {
            var result = swap([1,2,3], 1, 2);
            assert.deepEqual(result, [1,3,2]);
        });

    });

});
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

});
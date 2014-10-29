'user strict';

var shuffle = require('./shuffle'),
    assert = require('assert');

describe('Shuffle', function () {

    describe('when shuffling an array', function () {

        it('should return a shuffled array of same length', function () {
            var result = shuffle([1,2,3,4,5,6,7,8,9]);
            assert.equal(9, result.length);
        });

        it('should shuffle the elements in the array', function () {
            var input = [1,2,3,4,5,6,7,8,9];
            var clone = input.slice(0);
            shuffle(input);
            assert.notDeepEqual(input, clone);
        });
    });

});
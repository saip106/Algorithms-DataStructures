'user strict';

var swap = require('../common/swap');

function shuffle (array) {
    for (var i = 0; i < array.length; i++) {
        var random = randomNumberBetween(0, i);
        swap(array, random, i);
    }
    return array;
}

function randomNumberBetween(min, max)
{
    return Math.floor(Math.random() * (max-min+1) + min);
}

module.exports = shuffle;
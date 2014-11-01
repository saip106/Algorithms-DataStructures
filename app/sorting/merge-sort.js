'use strict';

var swap = require('../common/swap');

function sort(array) {
    internalSort(array, array.slice(0), 0, array.length - 1);
}

function internalSort(array, aux, start, end) {
    if (end <= start) {
        return;
    }

    var mid = Math.floor(start + (end - start) / 2);

    internalSort(array, aux, start, mid);
    internalSort(array, aux, mid + 1, end);
    merge(array, aux, start, mid, end);
}

function merge(array, aux, start, mid, end) {

    for (var index = start; index <= end; index++) {
        aux[index] = array[index];
    }

    var i = start; //0
    var j = mid + 1; //2
    for (var k = start; k <= end; k++) {
        if (i > mid) {
            array[k] = aux[j++];
        } else if (j > end) {
            array[k] = aux[i++];
        } else if (aux[i] > aux[j]) {
            array[k] = aux[j++];
        } else {
            array[k] = aux[i++];
        }
    }
}

module.exports = {
    sort: sort
};
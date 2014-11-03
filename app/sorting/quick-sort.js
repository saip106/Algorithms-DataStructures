'user strict';

var swap = require('../common/swap');

function sort(array) {
    if (array.length <= 1) {
        return;
    }
    shuffle(array);
    internalSort(array, 0, array.length - 1);
}

function internalSort(array, low, high) {
    if (high <= low) {
        return;
    }
    var divider = partition(array, low, high);
    internalSort(array, low, divider - 1);
    internalSort(array, divider + 1, high);
}

function shuffle(array) {
    for (var j, temp, i = array.length;
         i;
         j = Math.floor(Math.random() * i), temp = array[--i], array[i] = array[j], array[j] = temp);
}

function partition(array, low, high) {
    var j = high + 1;
    var i = low;

    while (true) {

        while (array[++i] < array[low]) {
            if (i === high) {
                break;
            }
        }

        while(array[low] < array[--j]) {
            if (j === low) {
                break;
            }
        }

        if (j <= i) {
            break;
        }

        swap(array, i, j);
    }

    swap(array, low, j);

    return j;
}

module.exports = {
    sort: sort
}
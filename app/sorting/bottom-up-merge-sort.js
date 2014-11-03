'user strict';

function sort (array) {
    for (var step = 1; step < array.length; step = step * 2) {
        for (var low = 0; low < array.length - step; low += step * 2) {
            merge(array, low, low + step - 1, Math.min(low + step + step - 1, array.length - 1));
        }
    }
}

function merge(array, start, mid, end) {

    var aux = array.slice(0);
    for (var index = start; index <= end; index++) {
        aux[index] = array[index];
    }

    var i = start;
    var j = mid + 1;
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
}
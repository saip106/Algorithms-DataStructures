'user strict';

var swap = require('../common/swap');

function sort (items, step) {

    if (typeof step === 'undefined' | step < 1) {
        step = 1;
    }

    for (var i = 0; i < items.length; i = i + step) {
        for (var j = i; j > 0; j = j - step) {
            if (items[j] < items[j - step]) {
                swap(items, j - step, j);
            } else {
                break;
            }
        }
    }
    return items;
}

module.exports = {
    sort: sort
}
'user strict';

var swap = require('../common/swap');

function sort (items) {
    for (var i = 0; i < items.length; i++) {
        for (var j = i; j > 0; j--) {
            if (items[j] < items[j - 1]) {
                swap(items, j - 1, j);
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
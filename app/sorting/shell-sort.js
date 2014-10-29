'user strict';

var insertionSort = require('./insertion-sort');

function sort (items) {
    var count = items.length;
    var steps = [];
    var start = 1;
    steps.push(start);
    while(start < count/3) {
        start = 3 * start + 1;
        steps.push(start);
    }
    for (var i = steps.length - 1; i >= 0; i--) {
        var step = steps[i];
        insertionSort.sort(items, step);
    }

    return items;
}

module.exports = {
    sort: sort
};
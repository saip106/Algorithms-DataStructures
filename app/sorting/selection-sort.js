'user strict';

function sort (items) {
    for (var i = 0; i < items.length; i++) {
        var minIndex = i;
        for (var j = i + 1; j < items.length; j++) {
            if (items[j] < items[i]) {
                minIndex = j;
            }
        }
        if (i !== minIndex) {
            var temp = items[i];
            items[i] = items[minIndex];
            items[minIndex] = temp;
        }
    }
    return items;
}

module.exports = {
    sort: sort
};
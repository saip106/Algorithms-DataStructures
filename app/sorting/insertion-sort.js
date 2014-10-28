'user strict';

function sort (items) {
    for (var i = 0; i < items.length; i++) {
        for (var j = i; j > 0; j--) {
            if (items[j] < items[j - 1]) {
                var temp = items[j];
                items[j] = items[j - 1];
                items[j - 1] = temp;
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
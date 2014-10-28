'user strict';

function swap (array, firstItemIndex, secondItemIndex) {
    var temp = array[firstItemIndex];
    array[firstItemIndex] = array[secondItemIndex];
    array[secondItemIndex] = temp;
    return array;
}

module.exports = swap;
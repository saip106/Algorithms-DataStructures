'use strict';

function ProblemSet () {
    this.data = [];
}

ProblemSet.prototype.initialize = function (numberOfMembers) {
    for(var i = 0; i < numberOfMembers; i++) {
        this.data[i] = i;
    }
};

ProblemSet.prototype.connect = function (first, second) {
    var firstRoot = rootOf(first, this.data);
    var secondRoot = rootOf(second, this.data);

    if (firstRoot === first) {
        this.data[first] = secondRoot;
    } else if (secondRoot === second) {
        this.data[second] = firstRoot;
    } else {
        this.data[firstRoot] = secondRoot;
    }
};

ProblemSet.prototype.areConnected = function (first, second) {
    return rootOf(first, this.data) === rootOf(second, this.data);
};

//This same solution can be written using a (while) loop
//I choose tail recursion here as that easier to understand
var rootOf = function (index, data) {
    if (data[index] === index) {
        return index;
    }
    return rootOf(data[index], data);
};

module.exports = {
    ProblemSet: ProblemSet
};
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
    this.data[first] = this.data[second];
};

ProblemSet.prototype.areConnected = function (first, second) {
    return this.data[first] === this.data[second];
};

module.exports = {
    ProblemSet: ProblemSet
};
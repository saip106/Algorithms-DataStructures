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
    var oldValue = this.data[first];
    for (var i = 0; i < this.data.length; i++) {
        if (this.data[i] === oldValue) {
            this.data[i] = this.data[second];
        }
    }
};

ProblemSet.prototype.areConnected = function (first, second) {

    return this.data[first] === this.data[second];
};

module.exports = {
    ProblemSet: ProblemSet
};
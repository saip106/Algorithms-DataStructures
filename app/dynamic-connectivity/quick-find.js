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
    reportCurrentState(this.data, 'before connecting ' + first + ' to ' + second);
    var oldValue = this.data[first];
    for (var i = 0; i < this.data.length; i++) {
        if (this.data[i] === oldValue) {
            this.data[i] = this.data[second];
        }
    }
    reportCurrentState(this.data, 'after connecting ' + first + ' to ' + second);
};

ProblemSet.prototype.areConnected = function (first, second) {

    return this.data[first] === this.data[second];
};

var reportCurrentState = function (data, message) {
    console.log(message);
    for(var i = 0; i < data.length; i++) {
        console.log('index: ' + i + ' value: ' + data[i]);
    }
};

module.exports = {
    ProblemSet: ProblemSet
};
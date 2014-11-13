'use strict';

function Graph(numberOfVeritices) {
    this.numberOfVeritices = numberOfVeritices;
    this.adjacentNodes = [];
    for (var i = 0; i < numberOfVeritices; i++) {
        this.adjacentNodes[i] = [];
    }
}

Graph.prototype.addEdge = function (from, to) {
    this.adjacentNodes[from].push(to);
    this.adjacentNodes[to].push(from);
}

Graph.prototype.getAdjacentVertices = function (vertex) {
    return this.adjacentNodes[vertex];
}

module.exports = Graph;
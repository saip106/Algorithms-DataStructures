/*globals describe, it*/
(function () {
    'user strict';

    describe('when finding connectivity between two connected points', function () {

        var quickFind = require('./quick-find'),
            assert = require('assert');

        it('should find the connection', function () {
            var result = quickFind.areConnected(1, 5);
            assert.strictEqual(result, true);
        });

    });

}());



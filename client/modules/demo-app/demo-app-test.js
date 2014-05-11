describe('meta', function () {
    'use strict';
    beforeEach(function () {
    });
    afterEach(function () {
    });
    it.skip('should fail', function () {
        expect(true).to.be.false;
    });
    it('should succeed', function () {
        expect(true).to.be.true;
    });
});

describe('demo-app', function () {
    'use strict';
    it('should have module demoApp', function () {
        expect(angular.module('demoApp')).to.not.be.null;
    });
    it('should NOT have module asdasd', function () {
        expect(function () {
            angular.module('asdasd');
        }).to.throw;
    });
});
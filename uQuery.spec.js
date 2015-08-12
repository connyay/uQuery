'use strict';
var expect = chai.expect;

describe('uQuery', function () {
  describe('constructor', function () {
    it('should return an instance of uQuery', function () {
      var uQ = new uQuery();
      expect(uQ).to.be.an.instanceof(uQuery);
    });

    it('should optionally require the new keyword', function () {
      var uQ2 = uQuery();
      expect(uQ2).to.be.an.instanceof(uQuery);
    });
  });
});

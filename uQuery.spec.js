'use strict';
var expect = chai.expect;

describe('uQuery', function () {
  describe('constructor', function () {
    it('should return an instance of uQuery', function () {
      var uQ = new uQuery();
      expect(uQ).to.be.an.instanceof(uQuery);
    });

    it('should optionally require the new keyword', function () {
      var uQ = uQuery();
      expect(uQ).to.be.an.instanceof(uQuery);
    });
  });

  describe('selectors', function () {
    it('should support an id selector', function () {
      var uQ = uQuery('#foo');
      expect(uQ._nodeList).to.be.an.instanceof(NodeList);
      expect(uQ._nodeList).to.have.length(1);
    });

    it('should support a class selector', function () {
      var uQ = uQuery('.bar');
      expect(uQ._nodeList).to.be.an.instanceof(NodeList);
      expect(uQ._nodeList).to.have.length(3);
    });
  });
});

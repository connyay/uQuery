'use strict';
var expect = chai.expect;

var _forEach = Array.prototype.forEach;

describe('uQuery', function () {

  beforeEach(resetFixtures);

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

  describe('makeRed', function () {
    it('should make an elements text color red', function () {
      uQuery('#foo').makeRed();
      var color = document.getElementById('foo').style.color;
      expect(color).to.equal('red');
    });

    it('should multiple elements text color red', function () {
      uQuery('.bar').makeRed();
      var called = 0;
      _forEach.call(document.querySelectorAll('.bar'), function (el) {
        var color = el.style.color;
        expect(color).to.equal('red');
        called++;
      });
      expect(called).to.equal(3);
    });

    it('should return an instance of uQuery', function () {
      var uQ = uQuery('#foo').makeRed();
      expect(uQ).to.be.an.instanceof(uQuery);
    });
  });

  describe('makeBold', function () {
    it('should make an elements font weight bold', function () {
      uQuery('#foo').makeBold();
      var fontWeight = document.getElementById('foo').style.fontWeight;
      expect(fontWeight).to.equal('bold');
    });

    it('should multiple elements font weight bold', function () {
      uQuery('.bar').makeBold();
      var called = 0;
      _forEach.call(document.querySelectorAll('.bar'), function (el) {
        var fontWeight = el.style.fontWeight;
        expect(fontWeight).to.equal('bold');
        called++;
      });
      expect(called).to.equal(3);
    });

    it('should return an instance of uQuery', function () {
      var uQ = uQuery('#foo').makeRed();
      expect(uQ).to.be.an.instanceof(uQuery);
    });
  });

  describe('chaining', function () {
    it('should make an elements font weight bold and text color red', function () {
      uQuery('#foo').makeBold().makeRed();
      var fooElem = document.getElementById('foo'),
        color = fooElem.style.color,
        fontWeight = fooElem.style.fontWeight;
      expect(fontWeight).to.equal('bold');
      expect(color).to.equal('red');
    });
    it('should make an elements text color red and font weight bold', function () {
      uQuery('#foo').makeRed().makeBold();
      var fooElem = document.getElementById('foo'),
        color = fooElem.style.color,
        fontWeight = fooElem.style.fontWeight;
      expect(fontWeight).to.equal('bold');
      expect(color).to.equal('red');
    });

    it('should return an instance of uQuery', function () {
      var uQ = uQuery('#foo').makeBold().makeRed();
      expect(uQ).to.be.an.instanceof(uQuery);
    });
  });
});


function resetFixtures() {
  var fixtures = document.getElementById('fixtures');
  _forEach.call(fixtures.children, function (el) {
    el.removeAttribute('style');
  });
}

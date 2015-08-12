(function () {
    'use strict';

    var _forEach = Array.prototype.forEach;

    function uQuery(selector) {
        if (!(this instanceof uQuery)) {
            return new uQuery(selector);
        }
        this._nodeList = document.querySelectorAll(selector);
    }

    uQuery.prototype.makeRed = function () {
        return this._each(this._styleTransform('color', 'red'));
    };

    uQuery.prototype.makeBold = function () {
        return this._each(this._styleTransform('fontWeight', 'bold'));
    };

    uQuery.prototype.getValue = function () {
        return this._nodeList[0].value;
    };

    uQuery.prototype._each = function (fn) {
        _forEach.call(this._nodeList, fn);
        return this;
    };

    uQuery.prototype._styleTransform = function (prop, value) {
        return function (elem) {
            elem.style[prop] = value;
        };
    };

    window.uQuery = uQuery;
})();

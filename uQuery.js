(function () {
    'use strict';

    var _forEach = Array.prototype.forEach;

    /**
     * Creates a new uQuery instance
     * @constructor
     * @param {string} selector - The css selector of elements
     * @returns {uQuery}
     */
    function uQuery(selector) {
        if (!(this instanceof uQuery)) {
            return new uQuery(selector);
        }
        this._nodeList = document.querySelectorAll(selector);
        this.length = this._nodeList.length;
    }

    /**
     * Makes the elements font color red
     * @returns {uQuery}
     */
    uQuery.prototype.makeRed = function () {
        return this._each(this._styleTransform('color', 'red'));
    };

    /**
     * Makes the elements font weight bold
     * @returns {uQuery}
     */
    uQuery.prototype.makeBold = function () {
        return this._each(this._styleTransform('fontWeight', 'bold'));
    };

    /**
     * Returns the value of the element(s)
     * @returns {String|Array[String]}
     */
    uQuery.prototype.getValue = function () {
        // Empty nodelist situation
        if (!this._nodeList.length) {
            return null;
        }
        // Single element in nodelist
        if (this._nodeList.length === 1) {
            var elem = this._nodeList[0];
            return elem.value || null;
        }
        // Multiple elements in nodelist
        var results = [];
        this._each(function (e) {
            results.push(e.value);
        });
        return results;
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

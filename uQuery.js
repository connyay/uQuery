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
        _forEach.call(this._nodeList, function (el) {
            el.style.color = 'red';
        });
    };

    window.uQuery = uQuery;
})();

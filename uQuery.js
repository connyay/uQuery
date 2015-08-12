(function () {
    'use strict';

    function uQuery(selector) {
        if (!(this instanceof uQuery)) {
            return new uQuery(selector);
        }
        this._nodeList = document.querySelectorAll(selector);
    }

    window.uQuery = uQuery;
})();

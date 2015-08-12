(function () {
    'use strict';

    function uQuery(selector) {
        if (!(this instanceof uQuery)) {
            return new uQuery(selector);
        }
    }

    window.uQuery = uQuery;
})();

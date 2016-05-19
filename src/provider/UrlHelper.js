module.exports = /*@ngInject*/ function () {
    'use strict';
    var base = null,
        provider = this;

    this.getBase = function () {
        return base;
    };

    this.setBase = function (b) {
        base = b;
    };

    this.$get = ['$window', '$browser', function ($window, $browser) {

        var calculateBase = function () {
            return $window.BASE_HREF || $browser.baseHref() || '/';
        };


        var UrlHelper = {
            asset: function (path) {
                if (!path) {
                    throw new Error("$rootScope.asset needs a valid relative path");
                }
                var b = provider.getBase();
                if (!b) {
                    b = calculateBase();
                }
                return b + path.replace(/^\//, '');
            }
        };
        /**
         * alias to asset()
         */
        UrlHelper.url = UrlHelper.asset;

        return UrlHelper;
    }];
};

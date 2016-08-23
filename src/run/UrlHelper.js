module.exports = /*@ngInject*/ function($rootScope, UrlHelper) {
    "ngInject";

    $rootScope.asset = UrlHelper.asset;

    $rootScope.url = $rootScope.asset;
};

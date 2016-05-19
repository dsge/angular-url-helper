module.exports = /*@ngInject*/ function($rootScope, UrlHelper) {

    $rootScope.asset = UrlHelper.asset;

    $rootScope.url = $rootScope.asset;
};

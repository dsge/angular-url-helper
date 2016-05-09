module.exports = function($rootScope, UrlHelper) {
    
    $rootScope.asset = UrlHelper.asset;

    $rootScope.url = $rootScope.asset;
};

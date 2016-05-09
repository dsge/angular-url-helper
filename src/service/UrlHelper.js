module.exports = function($browser){
	var base = window.BASE_HREF || $browser.baseHref() || '/';

    this.asset = function(path) {
        if (!path) throw new Exception("$rootScope.asset needs a valid relative path");
        return base+path.replace(/^\//,'');
    };
    /**
     * alias to asset()
     */
    this.url = this.asset;
}
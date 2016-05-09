var angular = require('angular');

angular.module(module.exports = 'angular-url-helper',[

])
.run(require('./run/UrlHelper'))
.service('UrlHelper', require('./service/UrlHelper'))
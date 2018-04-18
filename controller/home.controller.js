(function () {
	'use strict';
	angular.module('app').controller('homeController', homeController);

	function homeController($scope, isMobile, browserPrivacy) {
		$scope.is_private;
		$scope.checkPrivacyMode = function () {
			if (!isMobile.any) {
				browserPrivacy.isInPrivateMode().then(function (is_private) {
					$scope.is_private = is_private;
				});
			}
		}
	}
})();

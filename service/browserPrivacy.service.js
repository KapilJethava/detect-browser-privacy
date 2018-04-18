(function () {
	'use strict';
	angular.module('app').service('browserPrivacy', browserPrivacy);

	function browserPrivacy() {
		var isIE10OrLater = function (user_agent) {
			var ua = user_agent.toLowerCase();
			if (ua.indexOf('msie') === 0 && ua.indexOf('trident') === 0) {
				return false;
			}
			var match = /(?:msie|rv:)\s?([\d\.]+)/.exec(ua);
			if (match && parseInt(match[1], 10) >= 10) {
				return true;
			}
			return false;
		};

		var isInPrivateMode = function () {
			return new Promise(function (resolve, reject) {
				if (window.webkitRequestFileSystem) {
					window.webkitRequestFileSystem(
						window.TEMPORARY, 1,
						function () {
							resolve(false);
						},
						function (e) {
							resolve(true);
						}
					);
				} else if ("MozAppearance" in document.documentElement.style) {
					resolve(!!!(navigator.serviceWorker));
				} else if (isIE10OrLater(window.navigator.userAgent)) {
					try {
						if (!window.indexedDB) {
							resolve(true);
						} else {
							resolve(false);
						}
					} catch (e) {
						resolve(true);
					}
				} else if (window.localStorage && /Safari/.test(window.navigator.userAgent)) {
					var reset = false;
					try {
						window.localStorage.setItem('test', 1);
						reset = true;
					} catch (e) {
						resolve(true);
					}
					if (reset) {
						window.localStorage.removeItem('test');
						resolve(false);
					}
				}
			});
		}
		return {
			isInPrivateMode: isInPrivateMode
		};
	}
})();

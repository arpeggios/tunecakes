(function(){
	///////////////////////////////////
	//VARIABLES
	///////////////////////////////////
	var app = angular.module('tunecakes', ['ui.bootstrap']);

	var users = [];

	///////////////////////////////////
	//CONTROLLERS
	///////////////////////////////////
	app.controller('MainController', function(){
		// Can't think of any use for this.
	});
	app.controller('LoginController', function(){
		//add users[] here. Eventually link to users JSON or DB
		this.success = function(){
			location.href='welcome.html';
		}
	});
	app.controller('SearchController', function() {
		// this.userInput = {};
		this.success = function(){
		location.href='search-results.html';
		}
	});

	///////////////////////////////////
	//DIRECTIVES
	///////////////////////////////////
	app.directive('logoBlock', function(){
		return {
			restrict: 'E',
			templateUrl: 'logo-block.html'
		};
	});
	app.directive('accountLogin', function(){
		return {
			restrict: 'E',
			templateUrl: 'account-login.html'
		};
	});
	app.directive('searchForm', function(){
		return {
			restrict: 'E',
			templateUrl: 'search-form.html'
		}
	});
	app.directive('siteDescription', function(){
		return {
			restrict: 'E',
			templateUrl: 'site-description.html'
		}
	});
})();
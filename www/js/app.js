(function() {
	var app = angular.module('app', ['ui.router', 'navController', 'ngAnimate', 'ui.bootstrap'])
	// define for requirejs loaded modules
	define('app', [], function() { return app; });

	// function for dynamic load with requirejs of a javascript module for use with a view
	// in the state definition call add property `resolve: req('/views/ui.js')`
	// or `resolve: req(['/views/ui.js'])`
	// or `resolve: req('views/ui')`
	function req(deps) {
		if (typeof deps === 'string') deps = [deps];
		return {
			deps: function ($q, $rootScope) {
				var deferred = $q.defer();
				require(deps, function() {
					$rootScope.$apply(function () {
						deferred.resolve();
					});
					deferred.resolve();
				});
				return deferred.promise;
			}
		}
	}

	app.config(function($stateProvider, $urlRouterProvider, $controllerProvider, $locationProvider){
		$locationProvider.hashPrefix('');

		
		var origController = app.controller
		app.controller = function (name, constructor){
			$controllerProvider.register(name, constructor);
			return origController.apply(this, arguments);
		}

		var viewsPrefix = 'views/';

		// For any unmatched url, send to /
		$urlRouterProvider.otherwise("/")
		
		$stateProvider
			// you can set this to no template if you just want to use the html in the page
			.state('home', {
				url: "/",
				templateUrl: viewsPrefix + "home.html",
				data: {
					pageTitle	: 'Home'
				}
			})
			.state('interiores', {
				url: "/interiores",
				templateUrl: viewsPrefix + "interiores.html",
				data: {
					pageTitle: 'Interiores'
				}
			})
			.state('about', {
				url: "/about",
				templateUrl: viewsPrefix + "about.html",
				data: {
					pageTitle: 'About'
				}
			})
			.state('contact', {
				url: "/contact",
				reload: true,
				templateUrl: viewsPrefix + "contact.html",
				data: {
					pageTitle: 'Contact',
				}
			})
			
			.state('Residências', {
				url: "/residencias",
				templateUrl: viewsPrefix + "residencias.html",
				data: {
					pageTitle: 'Residências'
				}
			})
			.state('lojas', {
				url: "/lojas",
				templateUrl: viewsPrefix + "lojas.html",
				data: {
					pageTitle: 'Lojas e Escritórios'
				}
			})
			.state('consultoria', {
				url: "/consultoria",
				templateUrl: viewsPrefix + "consultoria.html",
				data: {
					pageTitle: 'Consultoria'
				}
			})
	})
	.directive('updateTitle', ['$rootScope', '$timeout',
		function($rootScope, $timeout) {
			return {
				link: function(scope, element) {
					var listener = function(event, toState) {
						var title = 'ZM Arquitetura';
						if (toState.data && toState.data.pageTitle) title = toState.data.pageTitle + ' - ' + title;
						$timeout(function() {
							element.text(title);
						}, 0, false);
					};

					$rootScope.$on('$stateChangeSuccess', listener);
				}
			};
		}
	])
	.controller('InterioresCtrl', function ($scope,$interval,$timeout) {
		$scope.currentIndex = 0;
		$scope.ishide= false;
        $interval(function(){
        	$scope.ishide=true;
        	$timeout(function() {
  				$scope.currentIndex < $scope.interiores.length - 1 ? $scope.currentIndex++ : $scope.currentIndex = 0;
				$scope.ishide=false;
			}, 400);
		}, 5000);

        $scope.interiores = [
            {image: 'imgs/interiores/imagem.jpg', description: 'Image 00'},
        	{image: 'imgs/interiores/imagem1.jpg', description: 'Image 01'},
        	{image: 'imgs/interiores/imagem2.jpg', description: 'Image 02'},
        	{image: 'imgs/interiores/imagem3.jpg', description: 'Image 03'},
        	{image: 'imgs/interiores/imagem4.jpg', description: 'Image 04'},
        	{image: 'imgs/interiores/imagem5.jpg', description: 'Image 05'},
        	{image: 'imgs/interiores/imagem6.jpg', description: 'Image 06'},
        	{image: 'imgs/interiores/imagem7.jpg', description: 'Image 07'},
        	{image: 'imgs/interiores/imagem8.jpg', description: 'Image 08'},
        	{image: 'imgs/interiores/imagem9.jpg', description: 'Image 09'},
        	{image: 'imgs/interiores/imagem10.jpg', description: 'Image 10'},
        	{image: 'imgs/interiores/imagem11.jpg', description: 'Image 11'},
        	{image: 'imgs/interiores/imagem12.jpg', description: 'Image 12'},
        	{image: 'imgs/interiores/imagem13.jpg', description: 'Image 13'},
        	{image: 'imgs/interiores/imagem14.jpg', description: 'Image 14'},
        	{image: 'imgs/interiores/imagem15.jpg', description: 'Image 15'},
        	{image: 'imgs/interiores/imagem16.jpg', description: 'Image 16'},
        	{image: 'imgs/interiores/imagem17.jpg', description: 'Image 17'},
        	{image: 'imgs/interiores/imagem18.jpg', description: 'Image 18'},
        	{image: 'imgs/interiores/imagem19.jpg', description: 'Image 19'},
        	{image: 'imgs/interiores/imagem20.jpg', description: 'Image 20'}
        ];
        })
	.controller('ResidenciasCtrl', function ($scope,$interval,$timeout) {
		$scope.currentIndex = 0;
		$scope.ishide= false;
        $interval(function(){
        	$scope.ishide=true;
        	$timeout(function() {
  				$scope.currentIndex < $scope.residencias.length - 1 ? $scope.currentIndex++ : $scope.currentIndex = 0;
				$scope.ishide=false;
			}, 400);
		}, 5000);
        $scope.residencias = [
        	{image: 'imgs/residencias/imagem.jpg', description: 'Uma humilde residencia no alto da colina'},
        	{image: 'imgs/residencias/imagem1.jpg', description: 'Image 01'},
        	{image: 'imgs/residencias/imagem2.jpg', description: 'Image 02'},
        	{image: 'imgs/residencias/imagem3.jpg', description: 'Image 03'},
        	{image: 'imgs/residencias/imagem4.jpg', description: 'Image 04'},
        	{image: 'imgs/residencias/imagem5.jpg', description: 'Image 05'},
        	{image: 'imgs/residencias/imagem6.jpg', description: 'Image 06'},
        	{image: 'imgs/residencias/imagem7.jpg', description: 'Image 07'},
        	{image: 'imgs/residencias/imagem8.jpg', description: 'Image 08'},
        	{image: 'imgs/residencias/imagem9.jpg', description: 'Image 09'}
        	]
        })
	.controller('LojasCtrl', function ($scope,$interval,$timeout) {
		$scope.currentIndex = 0;
		$scope.ishide= false;
        $interval(function(){
        	$scope.ishide=true;
        	$timeout(function() {
  				$scope.currentIndex < $scope.lojas.length - 1 ? $scope.currentIndex++ : $scope.currentIndex = 0;
				$scope.ishide=false;
			}, 400);
		}, 5000);
        $scope.lojas = [
            {image: 'imgs/lojas/imagem.jpg', description: 'Image 00'},
            {image: 'imgs/lojas/imagem1.jpg', description: 'Image 01'},
        	{image: 'imgs/lojas/imagem2.jpg', description: 'Image 02'},
        	{image: 'imgs/lojas/imagem3.jpg', description: 'Image 03'},
        	{image: 'imgs/lojas/imagem4.jpg', description: 'Image 04'},
        	{image: 'imgs/lojas/imagem5.jpg', description: 'Image 05'},
            ];
        })
	.controller('formCtrl', function($scope,$filter) {
		$scope.formulario = {
			nome : "" ,
			email : "",
			mensagem : ""
		}
		$scope.myMail = "victor.wkmail@gmail.com";
		$scope.assunto ="Consultoria";

		$scope.clean = function(){
			delete $scope.formulario;
			$scope.consultoriaForm.$setPristine();
		}
	})

	.filter('textFormat', function(){
		return function(input){
			return input.charAt(0).toUpperCase() + input.substring(1);
		}
	})
}());
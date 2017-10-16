angular.module('navController', [])
	.controller('nav', function($scope, $state,$window) {
		$scope.title = 'ZM Arquitetura';

		// returns true if the current router url matches the passed in url
		// so views can set 'active' on links easily
		$scope.isUrl = function(url) {
			if (url === '#') return false;
			return ('#' + $state.$current.url.source + '/').indexOf(url + '/') === 0;
		};
		$scope.reloadRoute = function(name) {
			if(name == 'Contact'){
		    	$window.location.reload();
			}
		};
		$(document).click(function(e) {
			if ($(e.target).is('a')) {
		     $('.collapse').collapse('hide');     
		    }
		});
		$scope.pages = [			
			{
				icon :'glyphicon glyphicon-lamp',
				name: 'Interiores',
				url: '#/interiores'
			},
			{	icon: 'fa fa-building',
				name: 'Residências',
				url: '#/residencias'
			},
			{
				icon: 'fa fa-suitcase',
				name: 'Lojas e Escritórios',
				url: '#/lojas'
			},
			{
				icon: 'fa fa-pencil-square',
				name: 'Consultoria',
				url: '#/consultoria'
			},
			{
				icon:'fa fa-info-circle',
				name: 'Quem Somos',
				url: '#/about'
			},
			{	icon: 'fa fa-envelope',
				name: 'Contact',
				url: '#/contact'
			}
		]
	});

angular.module('MiApp').controller('noticiasControler',
		[ '$log', '$scope', 'MyService', function($log, $scope, MyService) {

			// ***************
			// Variables globales para el carousel de la galeria
			$scope.myInterval = 1800;
			$scope.noWrapSlides = false;
			$scope.active = 0;
			var slides = $scope.slides = [];
			var currIndex = 0;
			// ***************

			

			var matriz_galeriaNoticias = [

				{
					id : "1",
					nombre : "",
					descripcion : "",
					alt : "",
					width : "300",
					height : "800",
					fecha : "",
					image : "images/noticias/01-19.jpg",			
				},
				{
					id : "2",
					nombre : "",
					descripcion : "",
					alt : "",
					width : "300",
					height : "800",
					fecha : "",
					image : "images/noticias/01-20.jpg",			
				},	
				{
					id : "3",
					nombre : "",
					descripcion : "",
					alt : "",
					width : "300",
					height : "800",
					fecha : "",
					image : "images/noticias/02-12.jpg",			
				},	
				{
					id : "4",
					nombre : "",
					descripcion : "",
					alt : "",
					width : "300",
					height : "800",
					fecha : "",
					image : "images/noticias/02-13.jpg",			
				},	
				{
					id : "5",
					nombre : "",
					descripcion : "",
					alt : "",
					width : "300",
					height : "800",
					fecha : "",
					image : "images/noticias/03-04.jpg",			
				},	
				{
					id : "6",
					nombre : "",
					descripcion : "",
					alt : "",
					width : "300",
					height : "800",
					fecha : "",
					image : "images/noticias/03-05.jpg",			
				},	
				{
					id : "7",
					nombre : "",
					descripcion : "",
					alt : "",
					width : "300",
					height : "800",
					fecha : "",
					image : "images/noticias/03-08.jpg",			
				},		
			]

			
			var gc = this;
			gc.noticias = matriz_galeriaNoticias;
			
			//***************
			
			
			gc.addSlide = function(slide) {
				var newWidth = 600 + slides.length + 1;

				slides.push({
					image : slide.image, // '//unsplash.it/' + newWidth +  '/300',
					nombre : slide.nombre, // ['Nice image','Awesome photograph','That is so cool','Ilove that'][slides.length % 4],
					descripcion : slide.descripcion,// gc.descripcion,
					id : currIndex++
				});
			};

			gc.addSlides = function() {
				for (var i = 0; i < gc.noticias.length; i++) {
					gc.addSlide(gc.noticias[i]);
				}
			}
			
			gc.addSlides();


		} ]);


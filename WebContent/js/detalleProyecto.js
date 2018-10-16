angular.module('MiApp').controller('GaleriaControler',
		[ '$log', '$scope', 'MyService', function($log, $scope, MyService) {

			// ***************
			// Variables globales para el carousel de la galeria
			$scope.myInterval = 3000;
			$scope.noWrapSlides = false;
			$scope.active = 0;
			var slides = $scope.slides = [];
			var currIndex = 0;
			// ***************
			
			

			var gc = this;
			gc.proyectos = matriz_proyectos;
			gc.proyecto = {};

			gc.idProyecto = '';// getQueryVariable("id");

			var pk = 'id';
			gc.findProyecto = function(key) {
				var rslt = gc.proyectos.find(function(item) {
					return item[pk] == key;
				});
				if (rslt) {
					gc.proyecto = angular.copy(rslt);
					gc.idProyecto = key;
				} else {
					$log.error('Elemento no encontrado');
					gc.proyecto = {
						titulo : "Proyecto no encontrado"
					};
				}
			};
			
			var id = 0;		
			// Proyecto seleccionado
			if (MyService.data.idProyecto){
				id = MyService.data.idProyecto;
				
			}else{
				id = getQueryVariable("id");
			}
			//****************
			

			gc.findProyecto(id);

			gc.addSlide = function(slide) {
				var newWidth = 600 + slides.length + 1;

				slides.push({
					image : slide.image, // '//unsplash.it/' + newWidth +  '/300',
					nombre : slide.nombre, // ['Nice image','Awesome photograph','That is so cool','Ilove that'][slides.length % 4],
					descripcion : slide.descripcion,// gc.descripcion,
				//	width: slide.width,
				//	height: slide.height,
					id : currIndex++
				});
			};

			gc.addSlides = function() {
				for (var i = 0; i < gc.proyecto.lista_img.length; i++) {
					gc.addSlide(gc.proyecto.lista_img[i]);
				}
			}

			if (gc.idProyecto != "") {
				gc.addSlides();
			}

			function getQueryVariable(variable) {

				var query = window.location.search.substring(1);

				var vars = query.split("&");
				for (var i = 0; i < vars.length; i++) {
					var pair = vars[i].split("=");
					if (pair[0] == variable) {
						return pair[1];
					}
				}
				return false;
			}

		} ]);
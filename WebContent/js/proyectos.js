angular.module('MiApp').controller('ProyectosControlador',
		[ 'MyService', function(MyService) {

			
			MyService.data.idProyecto = "p1";
			
			var vm = this;

			vm.proyectos = matriz_proyectos;

			vm.detalleProyecto = {};

			vm.verDetalleProyecto = function(proyecto) {

				vm.detalleProyecto = proyecto;
				vm.slides = proyecto.lista_img;
				modal.style.display = "block";

				if (proyecto.height == '') {
					heightDetalle = '900px';
				} else {
					heightDetalle = parseInt(proyecto.height) + 150;
					heightDetalle = heightDetalle + 'px';
				}
				vm.styleDetalle = {
					"height" : heightDetalle
				};
			}

			// ****************

			vm.miFiltro = function(elemento, pos, matriz) {

				if (elemento.id == vm.detalleProyecto.id) {
					return true;
				}

				return false;
			};

			// ****************
			vm.myInterval = 3000;
			
			
			vm.seleccionarProyecto = function(id){
				MyService.data.idProyecto = id;				
			}

		} ]);


//Get the modal
var modal = document.getElementById('detalle-proyecto');	

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on <span> (x), close the modal
//span.onclick = function() {
//    modal.style.display = "none";
//}
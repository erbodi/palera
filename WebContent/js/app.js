angular.module('MiApp', ['MyCore', 'ngAnimate', 'ngSanitize', 'ui.bootstrap']);

angular.module('MiApp').controller('PrincipalControlador', 
		[function() {
			
	var vm = this;
	
	vm.states = {};
	vm.states.activeItem = '1';//'';
	
	vm.opciones = [		
		//{ id: 0, texto: 'Inicio', titulo: 'Inicio', plantilla: 'view/inicio.html', visible: false },
		{ id: 1, texto: 'Proyectos', titulo: 'Proyectos | Estudio de arquitectura `Palera Arquitectos´', plantilla: 'view/proyectos.html', visible: true },
		//{ id: 2, texto: 'Publicaciones', titulo: 'Publicaciones', plantilla: 'view/publicaciones.html', visible: true },
		{ id: 3, texto: 'Palera', titulo: 'Palera | Estudio de arquitectura', plantilla: 'view/palera.html', visible: true},
		{ id: 4, texto: 'Contacto', titulo: 'Contacto | Estudio de arquitectura `Palera Arquitectos´', plantilla: 'view/contacto.html', visible: true }
	];
	
	vm.paginaNoticias = [		
		{ id: 5, texto: 'Noticias', titulo: 'Noticias | Estudio de arquitectura `Palera Arquitectos´', plantilla: 'view/noticias.html', visible: false },		
	];
	
	vm.paginaDetalleProyecto = [		
		{ id: 6, texto: 'Detalle Proyecto', titulo: 'Detalle Proyecto', plantilla: 'view/detalleProyecto.html', visible: false },		
	];
	
	vm.titulo = vm.opciones[0].titulo;
	vm.plantilla = vm.opciones[0].plantilla;
	
//	vm.titulo = vm.paginaNoticias[0].titulo;
//	vm.plantilla = vm.paginaNoticias[0].plantilla;
	
	vm.selecciona = function(indice) {
		if (!vm.opciones.length || vm.opciones.length <= indice) return;
		vm.titulo = vm.opciones[indice].titulo;
		vm.plantilla = vm.opciones[indice].plantilla;
				
	};
	
	vm.seleccionaProyectos = function() {
		
		vm.titulo = vm.opciones[0].titulo;
		vm.plantilla = vm.opciones[0].plantilla;
	};
	
	vm.seleccionaNoticias = function() {
		
		vm.titulo = vm.paginaNoticias[0].titulo;
		vm.plantilla = vm.paginaNoticias[0].plantilla;
	};
	
	vm.mostrarDetalleProyecto= function() {		
		
		vm.titulo = vm.paginaDetalleProyecto[0].titulo;
		vm.plantilla = vm.paginaDetalleProyecto[0].plantilla;
						
	};
	
	vm.ocultarMenu = function(){
		for (i=0; i < vm.opciones.length; i++){
			
			if (vm.opciones[i].id != 1) //Ocultamos si es != a la opción 'Proyectos'
				vm.opciones[i].visible = false;
		}		
	};
	
	vm.mostrarMenu = function(){
		for (i=0; i < vm.opciones.length; i++){
			op = vm.opciones[i];
			op.visible = true;
		}
	};
	
	
			
}]);


angular.module('MiApp').factory("MyService", function() {
	  return {
	    data: {}
	  };
	});




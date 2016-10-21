/* 
	Funcion que permite cargar de manera dinamica las vistas de la plataforma
*/
function cargarVista(nombreVista) {
	var url = "../viewsDocente/" + nombreVista + ".html";

	$.get(url, function(respuestaServer) {
		$("#contenedor").html(respuestaServer);
	});
}

//Carga la vista por defecto en lo que se ve por primera vez
cargarVista("misCursos");

/*
	Funcion que al dar click en cancelar en la plantilla agregar nueva actividad nos retorna a la lista de actividades
*/
function cancel (){
	cargarVista("listaActividades");
}

/*
	Valida que todos los campos esten deligenciados y carga los datos agregados al final de la lista de actividades
*/
function validar (){

	var activity = $("#activity").val();
	var fecha = $("#date").val();

	if(activity!==""){
		if(fecha!==""){
			alert("Nueva actividad sera agregada: "+ activity +" con fecha de entrega: " + fecha);
			cargarVista("listaActividades");
		} else {		
			alert("Seleccione una fecha limite de plazo para la entrega de la actividad");
			cargarVista("nuevo");
		}
	} else {		
		alert("Asignele un nombre a la actividad que desea crear");
		cargarVista("nuevo");
	}
	
}

$(document).ready(function(){

	$('.datepicker').pickadate({
	    selectMonths: true, // Crea un dropdown para el control de los meses
	    selectYears: 15 // Crea un control de 15 años en el calendario
	});

	//Campo de texto donde se describe la actividad a agregar. Esta funcion permite el reajuste en el tamaño del cajon de texto
	$('#description').trigger('autoresize');

});
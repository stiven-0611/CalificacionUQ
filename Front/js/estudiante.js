/* 
	Funcion que permite cargar de manera dinamica las vistas de la plataforma
*/
function vistaEstudiante(nombreVista) {
	var url = "../viewsEstudiante/" + nombreVista + ".html";

	$.get(url, function(respuestaServer) {
		$("#contenedor").html(respuestaServer);
	});
}

//Carga la vista por defecto en lo que se ve por primera vez
vistaEstudiante("CursosEstudiante");
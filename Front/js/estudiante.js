function vistaEstudiante(nombreVista) {
	var url = "../viewsEstudiante/" + nombreVista + ".html";

	$.get(url, function(respuestaServer) {
		$("#contenedor").html(respuestaServer);
	});
}
cargarVista("cursosEstudiante");
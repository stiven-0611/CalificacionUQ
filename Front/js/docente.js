function cargarVista(nombreVista) {
	var url = "../viewsDocente/" + nombreVista + ".html";

	$.get(url, function(respuestaServer) {
		$("#contenedor").html(respuestaServer);
	});
}

cargarVista("misCursos");
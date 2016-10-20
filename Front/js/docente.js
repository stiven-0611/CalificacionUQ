function cargarVista(nombreVista) {
	var url = "../viewsDocente/" + nombreVista + ".html";

	$.get(url, function(respuestaServer) {
		$("#contenedor").html(respuestaServer);
	});
}

cargarVista("misCursos");

$(document).ready(function(){

	$('.datepicker').pickadate({
	    selectMonths: true, // Creates a dropdown to control month
	    selectYears: 15 // Creates a dropdown of 15 years to control year
	 });

	 $('#description').trigger('autoresize');

	 $('#formulario').validate ({
	 	rules:{
	 		activity: "required",
	 		date: "required"
	 	},

	 	messages:{
	 		activity: "Asignele un nombre a la actividad",
	 		date: "Seleccione una fecha para la entrega"
	 	},

	 	submitHandler: function() {
	 		var activity = $("#actividad").val();
	 		var fecha = $("#date").val();
      var now = $.now();
      var date = new Date(now);

      var elemNuevo = $('<tr><td class="nameActivity"> </td> <td class="dateActivity"> </td> </tr>');

      elemNuevo.find(".nameActivity").text(activity);

      elemNuevo.find(".dateActivity").text(fecha);

      elemNuevo.appendTo("#tablaActividades");

	 	}
	 });

});

function cancel (){
	var url = "../viewsDocente/listaActividades.html";

	$.get(url, function(respuestaServer) {
		$("#contenedor").html(respuestaServer);
	});
}
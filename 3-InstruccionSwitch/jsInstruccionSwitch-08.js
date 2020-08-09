//Trassens Joaquin
/*Enunciado:
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
*/
function mostrar()
{
	var destino
	destino=txtIdDestino.value;
	switch(destino)
	{
		case "Cataratas":
		case "Mar del plata":
			alert("en el destino hace CALOR");
			break;
		case "Bariloche":
		case "Ushuaia":
			alert("en el destino hace FRIO");
			break;
	}

}//FIN DE LA FUNCIÓN
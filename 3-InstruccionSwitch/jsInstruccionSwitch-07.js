//Trassens Joaquin
/*Enunciado:
Al selecionar un destino , 
indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste*/
function mostrar()
{
	var destino
	destino=txtIdDestino.value;
	switch(destino)
	{
		case "Cataratas":
			alert("Se encuentra en el Norte");
			break;
		case "Mar del plata":
			alert("se encuentra en el Este");
			break;
		case "Bariloche":
			alert("Se encuentra en el Oeste");
			break;
		case "Ushuaia":
			alert("Se encuentra en el Sur");
			break;
	}

}//FIN DE LA FUNCIÓN
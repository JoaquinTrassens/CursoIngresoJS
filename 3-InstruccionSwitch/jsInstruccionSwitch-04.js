//Trassens Joaquin
/*Enunciado:
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.*/
function mostrar()
{
	var mes;
	mes=txtIdMes.value;
	switch(mes)
	{
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("tiene 30 días.");
			break;
		case "Febrero":
			alert("tiene 28 días.");
			break;
		default:
			alert("tiene 31 días.");
			break;
	}

}//FIN DE LA FUNCIÓN
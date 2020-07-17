/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var sueldo;
	var RESULTADO;
	var auxiliar;

	sueldo=txtIdImporte.value;
	sueldo=parseInt(sueldo);

	//auxiliar=sueldo*25/100;
	//RESULTADO=sueldo-auxiliar
	RESULTADO=sueldo*0.75;
	
	txtIdResultado.value=RESULTADO;

	//alert("El RESULTADO es "+RESULTADO);
}

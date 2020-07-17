/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var RESULTADO;
	var auxiliar;

	sueldo=txtIdSueldo.value;
	sueldo=parseInt(sueldo);

	//auxiliar=sueldo*10/100;
	//RESULTADO=sueldo+auxiliar
	RESULTADO=sueldo*1.1;
	
	txtIdResultado.value=RESULTADO;

	//alert("El RESULTADO es "+RESULTADO);
}

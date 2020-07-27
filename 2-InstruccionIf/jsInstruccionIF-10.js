// Trassens Joaquin
/*Enunciado:
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4*/

function mostrar()
{
	var numerorandom;
	numerorandom=parseInt(numerorandom);
	numerorandom=Math.floor(Math.random() * 10) + 1;

	if(numerorandom>8)
	{
		alert("su nota es "+numerorandom+" EXCELENTE");
	}
	if(numerorandom>3&&numerorandom<9)
	{
		alert("su nota es "+numerorandom+" APROBÓ");
	}
	if(numerorandom<4)
	{
		alert("su nota es "+numerorandom+" Vamos, la proxima se puede");
	}

}//FIN DE LA FUNCIÓN
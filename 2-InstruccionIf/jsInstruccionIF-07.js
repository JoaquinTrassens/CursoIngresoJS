// Trassens Joaquin
/*Enunciado:
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", 
mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'*/

function mostrar()
{
	var edad;
	edad=txtIdEdad.value;
	edad=parseInt(edad);

	var estadocivilingresado;
	estadocivilingresado=estadoCivil.value;

	if(edad<18&&estadocivilingresado!="Soltero")
	{
		alert("Es muy pequeño para NO ser soltero");
	}
	else
	{
		alert("ERROR");
	}

}//FIN DE LA FUNCIÓN
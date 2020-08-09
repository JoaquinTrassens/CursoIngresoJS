// Trassens Joaquin
/*Enunciado:
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'*/

function mostrar()
{
	/*var edad;
	edad=txtIdEdad.value;
	edad=parseInt(edad);

	var estadocivilingresado;
	estadocivilingresado=estadoCivil.value;

	if (edad>17&&estadocivilingresado=="Soltero")
	{
		alert("Es soltero y no es menor");
	}*/

	var edad;
	edad=txtIdEdad.value;
	edad=parseInt(edad);
	var estadocivilingresado;
	estadocivilingresado=estadoCivil.value;

	if(edad>17)
	{
		alert("se responsable");
		if(edad>59)
		{
			alert("sos persona de riesgo");
		}
		if(estadocivilingresado=="Soltero")
		{
			alert("a vivir la vida");
		}
		if(estadocivilingresado=="Casado")
		{
			alert("a disfrutar la pareja");
		}
	}
	else
	{
		if(edad<18)
		{
			alert("respeta a tus mayores");
			if(edad<13)
			{
				alert("hagan la tarea");
			}
		}
	}
	if(edad>12&&edad<18&&(estadocivilingresado=="Casado"||estadocivilingresado=="Divorciado"))
		{
			alert("sos muy joven para no ser soltero");
		}	
	if(estadocivilingresado=="Divorciado")
	{
		alert("a intentarlo nuevamente");
	}

}//FIN DE LA FUNCIÓN

/*Se pide ingresar una edad y un estado cicvil
	a todos los mayores de edad, mostrar el mensaje "se responsable"
	a todos los menores de edad, mostrar el mensaje "respeta a tus mayores"
	a los adultos mayores( mas de 60 años) tambien informar "sos persona de riesgo"
	a los niños tambien informar "hagan la tarea" 
	a los adolescentes casado o Divorciado "sos muy joven para no ser soltero"
	a los mayores de edad solteros, tambien informar "a vivir la vida"
	a los mayores de edad casados , tambien informar "a disfrutar la pareja"
	a los divorciados informar tambien "a intentarlo nuevamente"

    la menor cantidad de if 
    no repetir los alert o los mensajes 
    
*/
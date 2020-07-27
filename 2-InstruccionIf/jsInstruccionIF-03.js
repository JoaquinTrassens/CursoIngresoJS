function mostrar()
{
	var edad;
	edad=txtIdEdad.value;
	edad==parseInt(edad);

	if (edad>=18) 
	{
		alert("la persona es mayor de edad");
	}

	if(edad<18)
	{
		alert("la persona es menor de edad");
	}

}//FIN DE LA FUNCIÓN
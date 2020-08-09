//Trassens Joaquin
/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var respuesta;
	respuesta=prompt("Ingrese un numero entre el 0 y el 9")
	while(!(respuesta>0&&respuesta<10))
	{
		respuesta=prompt("Reingrese un numero entre el 0 y el 9")
	}
	txtIdNumero.value=respuesta;	
}//FIN DE LA FUNCIÓN
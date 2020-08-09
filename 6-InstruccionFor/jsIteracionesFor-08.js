//Trassens Joaquin
/*Enunciado:
al presionar el botón pedir un número. Informar si el numero es PRIMO o no.*/
function mostrar()
{
	var numero;
	var divisores;
	var i;
	var bandera;

	bandera = true;
	divisores = 0;

	numero = prompt("Ingrese un numero");
	numero = parseInt(numero);
	for(i=1; i<numero+1; i++)
	{
		if(numero%i==0)
		{
			divisores++;
		}
		if(divisores==3)
		{
			
			bandera = false;
			break;
		}
	}
	if(bandera == true)
	{
		alert(numero + " es primo");
	}
	else
	{
		alert(numero + " NO es primo");
	}
}//FIN DE LA FUNCIÓN


/*for(i=1; i<= numero; i++)
{
	if(numero%i==0)
	{
		divisor++;
	}
}

if(divores>2)
{
	no es Primo
}
else
{
	es primo
}*/

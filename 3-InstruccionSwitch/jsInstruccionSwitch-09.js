//Trassens Joaquin
/*Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes,
se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y 
localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y 
Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y 
Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene 
un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento*/
function mostrar()
{
	var precio;
	precio=15000;
	var preciofinal;
	preciofinal=parseInt(preciofinal);
	var descuento;
	descuento=parseInt(descuento);
	var estacion;
	estacion=txtIdEstacion.value;
	var destino;
	destino=txtIdDestino.value;
	switch(estacion)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					descuento=0.2;
	    			break;
	    		case "Mar del plata":
	    			descuento=-0.2;
	    			break;
	    		default:
	    			descuento=-0.1;
	    			break;
	    	}
	    break;	
	    case "Verano":
	    	switch(destino)
	    	{
	    		case "Bariloche":
	    			descuento=-0.2;
	    			break;
	    		case "Mar del plata":
	    			descuento=0.2;
	    			break;
	    		default:
	    			descuento=-0.1;
	    			break;
	    	}
	    break;	
	    case "Otoño":
	    case "Primavera":
	    	switch(destino)
	    	{
	    		case "Cordoba":
	    			descuento=0;
	    			break;
	    		default:
	    			descuento=0.1;
	    			break;
	    	}
	    break;	
	}
	preciofinal=precio+(precio*descuento);
	alert("El precio final es: "+preciofinal);

}//FIN DE LA FUNCIÓN
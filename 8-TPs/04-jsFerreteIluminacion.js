// Trassens Joaquin
/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de 
otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % 
si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” 
se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar 
del impuesto con el siguiente mensaje:
”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var cantidadLamparas;
 	var marcaLamparas;
 	var precioBruto;
 	
 	var descuentoCalculado;
 	var porcentaje;
 	var precioFinal;
 	var aumentoIIBB;


 	
 	cantidadLamparas=txtIdCantidad.value;
 	cantidadLamparas=parseInt(cantidadLamparas);

 	marcaLamparas=Marca.value;
	precioBruto=cantidadLamparas*35;

	switch(cantidadLamparas)
	{
		case 1:
		case 2:
			porcentaje=0;
			break;
		case 3:
			switch(marcaLamparas)
			{
				case "ArgentinaLuz":
					porcentaje=15;
					break;
				case "FelipeLamparas":
					porcentaje=10;
					break;
				default:
					porcentaje=5;
					break;
			}			
			break;
		case 4:
			switch(marcaLamparas)
			{
				case "ArgentinaLuz":
				case "FelipeLamparas":
					porcentaje=25;
					break;
				default:
					porcentaje=20;
					break;
			}
			break;
		case 5:
			switch(marcaLamparas)
			{
				case "ArgentinaLuz":
					porcentaje=40;
					break;
				default:
					porcentaje=30;
					break;
			}
 			break;
 		default:
 			porcentaje=50;
 			break;
	}
	descuentoCalculado=precioBruto*porcentaje/100;
	precioFinal=precioBruto-descuentoCalculado;
	aumentoIIBB=0;
	if(precioFinal>120)
	{
		aumentoIIBB=precioFinal*10/100;
		alert("Usted pago "+aumentoIIBB+" de IIBB.")
	}
 	txtIdprecioDescuento.value=precioFinal+aumentoIIBB;
}
/*
function CalcularPrecio () 
{
 	var cantidadDeLamparitas;
 	cantidadDeLamparitas=txtIdCantidad.value;
 	cantidadDeLamparitas=parseInt(cantidadDeLamparitas);
 	var marcaDeLamparita;
 	marcaDeLamparita=Marca.value;
 	var precioDeLamparita=35;
 	var importeDescuento;
 	var precioFinal;

 	// PUNTO A
 	if(cantidadDeLamparitas>5)
 	{
 		precioFinal=precioDeLamparita*cantidadDeLamparitas;
 		importeDescuento=(precioFinal*0.5);
 	}
 	if(cantidadDeLamparitas==5&&marcaDeLamparita=="ArgentinaLuz")
 	{
 		precioFinal=precioDeLamparita*cantidadDeLamparitas;
 		importeDescuento=(precioFinal*0.4);
 	}
 	else
 	{
 		if(cantidadDeLamparitas==5&&marcaDeLamparita!="ArgentinaLuz")
 		{
 			precioFinal=precioDeLamparita*cantidadDeLamparitas;
 			importeDescuento=(precioFinal*0.3);
 		}
 	}
 	/*if(cantidadDeLamparitas==4&&(marcaDeLamparita=="ArgentinaLuz"||marcaDeLamparita=="FelipeLamparas")
 	{
 		precioFinal=precioDeLamparita*cantidadDeLamparitas;
 		importeDescuento=(precioFinal*0.25);
 	}*/
 	/*else
 	{
 		if(cantidadDeLamparitas==4&&(marcaDeLamparita!="ArgentinaLuz"||marcaDeLamparita=="FelipeLamparas")
 		{
 			precioFinal=precioDeLamparita*cantidadDeLamparitas;
 			importeDescuento=(precioFinal*0.2);
 		}
 	}*/
 	
	


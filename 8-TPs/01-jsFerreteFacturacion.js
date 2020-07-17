/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var preciouno;
	var preciodos;
	var preciotres;
	var suma;

	preciouno=txtIdPrecioUno.value;
	preciouno=parseInt(preciouno);
	preciodos=txtIdPrecioUno.value;
	preciodos=parseInt(preciodos);
	preciotres=txtIdPrecioUno.value;
	preciotres=parseInt(preciotres);

	suma=preciouno+preciodos+preciotres;
	alert("la suma de los tres prodcutos es "+suma);

}
function Promedio () 
{
	var preciouno;
	var preciodos;
	var preciotres;
	var promedio;
	var suma;

	preciouno=txtIdPrecioUno.value;
	preciouno=parseInt(preciouno);
	preciodos=txtIdPrecioDos.value;
	preciodos=parseInt(preciodos);
	preciotres=txtIdPrecioTres.value;
	preciotres=parseInt(preciotres);

	suma=preciouno+preciodos+preciotres;

	promedio=suma/3;

	alert("el promedio de los mismos es "+promedio);
}
function PrecioFinal () 
{
	var preciouno;
	var preciodos;
	var preciotres;
	var sumadeprecios;
	var iva;
	var PrecioFinal;

	preciouno=txtIdPrecioUno.value;
	preciouno=parseInt(preciouno);
	preciodos=txtIdPrecioDos.value;
	preciodos=parseInt(preciodos);
	preciotres=txtIdPrecioTres.value;
	preciotres=parseInt(preciotres);

	sumadeprecios=preciouno+preciodos+preciotres;
	iva=sumadeprecios*21/100;
	PrecioFinal=sumadeprecios+iva;

	alert("el precio final + iva es: "+PrecioFinal);

}
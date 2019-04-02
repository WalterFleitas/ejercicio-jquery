//la calculadora debe realizar 
//el cuadrado de un numero d
//
// 1. recuperar la referencia del boton utilizando $
// 2. agregar el evento click al boton
// 3. crear la funcion para realizar el calculo 
// 4. el resultado se debe mostrar en el elemento adecuado
//recupera el elemento btn1


$("#btn1").click(function(ev){
	ev.preventDefault(); //evita que el formulario se envie al servidor

	//logica para resolver el problema 
	// 1. recuperar lo que ingreso el usuario y guardar en una variable 
	// 2. realizar el calculo y guardar en otra variable 
	let numIngresado = $("#n1").val();
	let result = Math.pow(numIngresado,2);
	//EL objeto Math tiene varias funciones matematicas 

	$(".res1").html(`${numIngresado}<sup>2</sup> = ${result}`);
	$(".res1").css("border","red solid 10000px");

});





//segundo section //

$("#btn2").click(function(ev){
	ev.preventDefault();

	let palabra= $("#palabra").val(); //se trajo lq el usuario ingreso
	
	console.log(palabra.length);

	$(".res2").text(palabra.length);








});



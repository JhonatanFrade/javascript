function myFunction(){
	var number1 = 1;
	var number2 = 2;
	return sum();
	function sum(){
		return number1 + number2;
	}

	/* assim ele não funciona por atribuir a uma variável
	var sum = function sum(){
		return number1 + number2;
	}*/
}

console.log( myFunction() );

function testeFunction(){
	console.log( 'Antes de declarar', number1);
	var number1 = 10;
	console.log( 'Depois de declarar', number1);
}

console.log(testeFunction());

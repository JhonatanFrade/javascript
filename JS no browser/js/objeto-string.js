(function(){
	// diretiva use strict
	'use strict';
	var nome = new String('Jhonatan');

	console.log( nome );

	console.log( nome.length );

	console.log( nome.charAt(0) );

	console.log( nome[1] );

	console.log ( nome.concat(' Frade', ' de', ' Oliveira', ' Pereira.') );
	// mas a variável continua intacta
	console.log ( nome );

	// vai me dizer qual posição que está a string | -1 é que não existe | lastIndexOf - de tras para frente
	console.log ( nome.indexOf('na') );

	// substitui string - a variavel fica intacta
	console.log( nome.replace('o', 'a') );

	//trazer um trecho da string - a variavel fica intacta
	console.log( nome.slice(3) );

	console.log( nome.slice(3, 6) );

	// split cria um nome array eliminando alguma string passado por paramentro- a variavel fica intacta
	console.log( nome.split() );
	console.log( nome.split('n') );

	// vou separar com o split e juntar com o join
	var arrJho = nome.split('n');

	console.log( 'variavel nova:', arrJho );

	console.log( arrJho.join('n') );

	// para substituir todos os caracteres repetidos de uma string
	console.log(nome.split('n').join('z') );

	//substring é a mesma coisa que o slice, a diferença que ele consegue pegar do final para o inicio.
	console.log ('substring:', nome.substring(6, 2) );

	//toLowerCase - todas as strings em caixa baixa
	console.log(nome.toLowerCase() );

	//toUpperCase - todas as strings em caixa alta
	console.log(nome.toUpperCase() );

	//sempre que quiser deixar todas os nomes com a primeira letra maiuscula.
	var nomeTeste = 'jhonatan';
	console.log( nomeTeste.charAt(0).toUpperCase() + nomeTeste.slice(1) );

})();
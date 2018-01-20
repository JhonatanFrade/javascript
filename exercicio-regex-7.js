(function(){
	'use strict';

	// EXERCICIO 1

	console.log( 'Regex para números usando o construtor:' );

	var justNumerRegex = new RegExp( '^\\d+', 'gm' );

	console.log( justNumerRegex );

	var text = '10 anos.\n50 discos vendidos.\nE nem 10% dos meus amigos o conhece';

	console.log('\nNúmeros do inicio da linha do texto:\n' + text, '\n');
	console.log( text.match( justNumerRegex ) );

	// EXERCICIO 2

	console.log('\nRegex para números somente no final das linhas:');
	var numbersAtTheEnd = /\d+$/gm;
	console.log( numbersAtTheEnd );

	// EXERCICIO 3

	var otherText = 'Criando um texto para teste 3\n esse texto com numeros de 0-9 tem\n que ter numero no final da linha\n como por exemplo 12\n teste concluido 33.';
	console.log( 'Numeros no final da linha:\n\n', otherText, '\n' );
	console.log( otherText.match( numbersAtTheEnd ) );


})();
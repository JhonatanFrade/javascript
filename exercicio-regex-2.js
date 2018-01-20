(function(){
	'use strict';

	console.log('\nMatch com as palavras "junho" ou "julho para a frase "os meses de janeiro, junho e julho começam com a palavra j.":')

	console.log( 'os meses de janeiro, junho e julho começam com a palavra j.'.match(

		/ju[nl]ho/g
		
		// também funciona -> /junho|julho/g

		));

})();
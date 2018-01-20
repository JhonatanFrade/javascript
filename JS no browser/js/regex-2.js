(function(){

	// .replace()

	// diretiva use strict
	'use strict';
	var texto = 'Assim como o aquecimento do 1875 planeta é calculado através de uma média das temperaturas de diferentes lugares, a inflação calculada pelo IPCA (Índice de preços ao consumidor amplo) é uma 1817 média ponderada da variação dos preços de 400 produtos como bebidas, alimentos, roupas e por ai vai';

	//console.log( texto.replace( /de/, 'DE' ) );
	//console.log( texto.replace( /de/g, 'DE' ) );
	//console.log( texto.replace( /(de)/g, '--$1--' ) );
	//console.log( texto.replace( /(d)(e)/g, '$1$1' ) );
	//console.log( texto.replace( /(d)(e)/g, '--$2' ) );
	//console.log( texto.replace( /(d)(e)/g, '--$&' ) );

	//analisar o arguments
	/*texto.replace( /(d)(e)/g, function(){
		console.log( 'ARGUMENTS', arguments );
	});*/

	//concatenar e dar um touppercase
	/*console.log(texto.replace( /(d)(e)/g, function(capturaTotal, d, e){
		return(d + e).toUpperCase();
	}) );*/

	//concatenar e dar um touppercase e um lowercase
	var nome = 'Jhonatan';
	console.log(nome.replace( /(\w)(\w)/g, function(capturaTotal, letra1, letra2){
		return letra1.toUpperCase() + letra2.toLowerCase();
	}) );




})();
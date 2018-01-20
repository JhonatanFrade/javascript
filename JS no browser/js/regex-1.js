(function(){

	//METODO .match()

	// diretiva use strict
	'use strict';
	var texto = 'Assim como o aquecimento do 1875 planeta é calculado através de uma média das temperaturas de diferentes lugares, a inflação calculada pelo IPCA (Índice de preços ao consumidor amplo) é uma 1817 média ponderada da variação dos preços de 400 produtos como bebidas, alimentos, roupas e por ai vai';
	
	// procurar por "de" globalmente no texto.
	//console.log( texto.match(/de/g) );
	
	// \w: vai casar com qualquer caracterer alfanumérico e _
	//console.log( texto.match(/\w/g) );

	// \d: número (digitos) - procura o primeiro digito no texto.
	//console.log( texto.match(/\d/) );	
	//console.log( texto.match(/\d/g) ); 
	//console.log( texto.match(/\d\d/g) );

	//lista - classe de caracteres = a|b|c - trazer todos a,b,c do texto
	//console.log( texto.match(/[abc]/g) );

	//agrupamentos de caracteres
	//console.log( texto.match(/(1875)|(1817)/g) );

	//se eu quiser todos os numeros de 0 - 9
	//console.log( texto.match(/[0-9]/g) );

	//se eu quiser todos as letras minusclas de a - z
	//console.log( texto.match(/[a-z]/g) );

	//se eu quiser todos as letras maiusculas de A - Z
	console.log( texto.match(/[A-Z]/g) );

	//se eu quiser pegar todos os alfanúmericos
	//console.log( texto.match(/[a-zA-Z0-9]/g) );

})();
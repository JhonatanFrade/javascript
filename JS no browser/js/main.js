(function(){
	// diretiva use strict
	'use strict';
	var texto = 'Assim como o aquecimento do planeta é calculado através de uma média das temperaturas de diferentes lugares, a inflação calculada pelo IPCA (Índice de preços ao consumidor amplo) é uma média ponderada da variação dos preços de 400 produtos como bebidas, alimentos, roupas e por ai vai';
	console.log( texto.match(/de/g) );

})();
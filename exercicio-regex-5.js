(function(){
	'use strict'

	//(?:) (somente agrupamento, sem capturar)

	console.log('junho e julho'.match(

		/ju(?:n|l)ho/g

		));

	console.log('==========================');

	console.log('<h1>Título da página</h1><p>Este é um parágrafo</p><footer>Rodapé</footer>'.replace(

		/<(\w+)>.+?<\/(\w+)>/g, '$1 $2 '

		));	

	console.log('==========================');

	console.log('<h1>Título da página</h1><p>Este é um parágrafo</p><footer>Rodapé</footer>'.replace(

		/<(\w+)>.+<\/(\1)>/g, '$1 $2 '

		));	
	

})();
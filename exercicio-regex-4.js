(function(){
	'use strict';

	console.log('<h1>Título da página</h1><p>Este é um parágrafo</p><footer>Rodapé</footer>'.replace(

		/<(\w+)>([^<]+)<\/\w+>/g, '<$1>O texto dentro da tag "$1" é "$2"</$1>\n'

		));

	// OUTRA FORMA DE FAZER
	console.log('==========================\n');

	console.log('<h1>Título da página</h1><p>Este é um parágrafo</p><footer>Rodapé</footer>'.replace(

		/(<(\w+)>)([^<]+)(<\/\w+>)/g, '$1O texto dentro da tag "$2" é "$3"$4\n'

		));	

})();
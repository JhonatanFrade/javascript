(function(){
	'use strict';

	//<div><section><blockquote>Texto <img /></blockquote></section></div>

	console.log('\nMatch com a abertura de uma tag HTML');

	console.log('<div><section><blockquote>Texto <img /></blockquote></section></div>'.match(

		/<\w+>/g

		));

	console.log('========================');

	console.log('\nMatch com tags HTML vazias (abertura e fechamento da tag):');

	console.log( '<div><ul><li></li><li></li><li><span></span></li></ul></div>'.match(

		/<\w+><\/\w+>/g

		) );

})();
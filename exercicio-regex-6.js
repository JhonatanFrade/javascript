(function(){
	'use strict'

	var CPF = '111.222.333-44';

	console.log('=======> metodo split <========');

	console.log ( CPF.split( /\D/ ) );

	console.log('=======> metodo search <========');

	console.log ( CPF.search( /\./ ) );

	console.log('========> metodo indexOf <=======');

	console.log ( CPF.search( /\./ ) );

})();
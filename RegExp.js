(function(){
	'use strict';

	var name = 'jhonatan122frade';

	var regex = new RegExp( '\\d' );

	console.log( /\d/.test(name) );

	console.log( regex );

	console.log( regex.test(name) );

	console.log('=====> exec() <=====');

	regex = /\d/g;

	console.log( regex.exec( name ) );
	console.log( regex.exec( name ) );
	console.log( regex.exec( name ) );
	console.log( regex.exec( name ) );
	console.log( regex.lastIndex );

	console.log("============");

	console.log( 'Julio\'s bar' );

})();
(function(){
	// o use strict não permite que o this fique no scopo global - o this === undefined
	'use strict';
	function Person ( name, lastName, age ) {
		this.name = name;
		this.lastName = lastName;
		this.age = age;
	}
	console.log( this );
})();
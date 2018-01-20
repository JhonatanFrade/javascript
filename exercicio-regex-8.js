(function(){
	'use strict';

	// EXERCICIO 4

	var markup = '<main>\n  <div class="container">\n   <span class="text date"></span>\n   <p class=\'excerpt\'></p>\n  </div>\n</main>';

	console.log('\n Quais classes CSS existem na marcação abaixo?\n\n', markup, '\n');

	function hasClass(markup, cssClass){
		//var regex = new RegExp( 'class=["\'](?:[\\w\\s]+)?' + cssClass + '(?:[\\w\\s]+)?["\']'); 
		var regex = new RegExp( 'class=["\'].*' + cssClass + '.*["\']'); 
		return regex.test( markup );
	}

	var classes = ['container', 'text', 'date', 'excerpt', 'main'];
	classes.forEach(function(cssClass){
		console.log( hasClass( markup, cssClass ) + ' para a classe ' + cssClass );
	});


})();
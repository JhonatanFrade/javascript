(function(){
	'use strict';

	/*
	//validar URL simples
	var url = 'http://www.google.com.br';
	console.log(url, validateUrl(url));

	function validateUrl(value) {
  		//return /https?:\/\/\w+\.\w+\.\w{3}\.\w{2}/g.test(value);
  		return /https?:\/\/\w+[.\w]+/g.test(value);
	}
	*/

	/*
	//validar um e-mail
	var email = 'jhonatan@gmail.com.br.la.la.la';

	console.log(email, validateEmail(email));

	function validateEmail(value){
		return /[\w+]+@\w+\.\w+([.\w]{2})?/g.test(value);
	}
	*/

	//chave valor
	var queryString = '?s=lala&b=bebe&c=cce';

	queryString.replace(/[?&](\w+)=(\w+)/g, function(regex, key, value){
		console.log(key, value);
		return true;
	});


})();
(function(){
	'use strict';

	// ******** LIMPAR CPF *********

	var CPF = [];
	CPF.push('049-214 3421-1');
	CPF.push('210.458.522-05');
	CPF.push('735 500 794 - 22');
	CPF.push('101.123-131x32');

	function cleanCPF( CPF ) {
		return CPF.replace( /\D/g, '' ); //faz trocar qualquer dígito por vazio.
	}

	console.log('=========> COMO ERA ANTES <=========');
	for (var i in CPF){
		console.log ( CPF[i] );	
	}

	// OUTRA FORMA DE LAÇO DE REPETIÇÃO
	console.log('=========> LIMPANDO CPF <==========');

	CPF.forEach(function( CPF ){
		console.log( cleanCPF( CPF ) );
	});
	
	// FORMATAR CPF CORRETAMENTE
	console.log('=========> CPF FORMATADO <==========');
	CPF.forEach(function( CPF ){
		console.log( cleanCPF( CPF ).replace( /(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4' ) );
	});	


})();
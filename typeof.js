function subtract(num1, num2){
	if(typeof num1 === 'number' && typeof num2 === 'number'){
		return num1 + num2;
	}
	return 'Entre com dois números';
}
console.log(subtract(10, 2));
console.log(subtract('JS', 2));
console.log(subtract({}, []));

// corrigi erro do null que retorna object no typeof

function funcao ( num1, num2 ) {
	if( num1 === null){
		return 'Não entre com valores nulos';
	}
	return num1 - num2;
}

console.log( funcao(null, 2));
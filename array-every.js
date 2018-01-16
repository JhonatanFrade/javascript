//verificar se todos os itens do array são true

var arr = [1, 2, 3, 4, 5, 6, 7];

var every = arr.every(function(item){
	console.log( item );
	return item < 8;
});

console.log( every );


// metodo some()

var some = arr.some(function(item){
	return item % 2 === 0;
});

console.log( some );
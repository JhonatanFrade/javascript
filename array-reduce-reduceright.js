//var arr = [1, 2, 3, 4, 5];
var arr = ['j', 'h', 'o', 'n', 'a', 't', 'a', 'n'];
var reduce1 = arr.reduce(function(acumulado, atual, index, array){
	return acumulado + atual;
//}, 0);
});

var reduce2 = arr.reduceRight(function(acumulado, atual, index, array){
	return acumulado + atual;
//}, 0);
});


console.log( reduce1 );
console.log( reduce2 );
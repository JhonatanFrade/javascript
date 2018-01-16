var arr = [1, 2, 3, 4, 5];

var map = arr.map(function(item, index, array){
	//return item + 1;
	//return { index: index, item: item };
	return item + 10;
}).filter(function(item){
	return item > 13;
});

console.log ( map );


// criar o mesmo método com o forEach
/*
var newArr = [];
arr.forEach(function(item, index, array){
	newArr.push({ index: index, item: item });
});
console.log('newArr:');
console.log( newArr );
*/

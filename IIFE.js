// Immediately-invoked function expression
// uma função auto-executável
/*
function sum(){
	return 1 + 2;
};
console.log( sum());

var sum2 = function(){
	return 3 + 2;
};
console.log( sum2());

var sum3 = function OtherSum(){
	console.log(OtherSum);
	return 5 + 8;
};
console.log( sum3());
//console.log( OtherSum());

var obj = {
	prop: function(){
		return 1 + 2;
	},
	prop2: 'teste'
};
console.log(obj);
console.log(obj.prop());
*/

//colocar dentro de uma expressão
(function(){
	console.log( 1 + 2 );
})();

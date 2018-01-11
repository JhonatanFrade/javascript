/*
var car = {
	color: 'yellow' 
}

function getCarColor(mycar){
	return mycar.color;
}

console.log( getCarColor(car));

*/

function showOtherFunction(func) {
	return func();
}

console.log(showOtherFunction ( function (){
	return 'Functional JS Ninja!';
}));

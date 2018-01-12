var car = {
	brand: 'VW',
	model: 'Gol',
	year: 2013
};

for (var prop in car){
	console.log(car[prop]);
}

console.log('Doos in car?','doors' in car);
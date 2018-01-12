// metodo join
arr = ['arroz','feijao','frango'];

console.log( arr );
console.log( arr.join() );

// usar os parametros do join
console.log( 'Meu almoço será', arr.join(', '));

//inverter as ordem dos valores
arr.reverse();
console.log( arr );

// ordernar por ordem alfabetica
arr.sort();
console.log( arr );

// usando toString
console.log( arr.toString() );

// concat
console.log( arr.concat('lasanha') );
console.log( arr ) ;

arr2 = [1,2,3,4];
console.log( arr2.concat([5,6,7]) );
console.log( arr2 );

// unshift
console.log( arr2.unshift( 0 ) );
console.log( arr2 );

// shift
arr2.shift();
console.log( arr2 );
obj = {x: 1, y: 2}
// retorna as propriedades do objeto em um array
console.log( Object.keys(obj) );

// retorna quantas propriedades existe
console.log( Object.keys(obj).length );

// verificar se há uma herança de prototype
obj2 = Object.create(obj);
obj2.x = 3;
obj3 = Object.create(obj2);

console.log( 'Obj é prototipo do obj2? ' + obj.isPrototypeOf(obj2) );
console.log( 'Obj é prototipo do obj3? ' + obj.isPrototypeOf(obj3) );
console.log( 'obj2 é prototipo do obj? ' + obj2.isPrototypeOf(obj) );

// Retornar o objeto no formato JSON (JavaScript Object Notation)
console.log( JSON.stringify(obj) );

// Transformar obj em uma string
var str = JSON.stringify(obj);
console.log( 'obj em string: ' + str );

// Transformar string em obj
JSON.parse(str);
console.log( 'string em obj: ' + str );
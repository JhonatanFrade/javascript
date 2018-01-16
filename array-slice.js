// SLICE

var arr = [1,2,3,4,5];

console.log(arr);

console.log(arr.slice(0,2));
console.log(arr.slice(-2));

// SPLICE

console.log( arr.splice(3) );
console.log(arr);

arr.push(4,5,6,7);
console.log(arr);

console.log(arr.splice(1,3));
console.log(arr);

// adicionar com splice
arr.splice(1, 0, 'a', 'b', 'c');
console.log(arr);

//substituir o arrays com splice
arr.splice(1, 3, 2, 3, 4);
console.log(arr);
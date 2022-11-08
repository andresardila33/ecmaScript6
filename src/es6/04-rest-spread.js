// Arrays destructuring
let fruits = ["Apple", "Kiwi", "Banana"];
let [a, b] = fruits;
console.log(a, b);
console.log(a, fruits[2]);

//Object destructuring
let user = {username: 'Andres', age: '32'};
let {username, age} = user;
console.log(username, user.age);
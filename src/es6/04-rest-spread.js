// Arrays destructuring
let fruits = ["Apple", "Kiwi", "Banana"];
let [a, b] = fruits;
console.log(a, b);
console.log(a, fruits[2]);

//Object destructuring
let user = { username: "Andres", age: "32" };
let { username, age } = user;
console.log(username, user.age);

// Spread Operator
const person = { name: "Liliana", age: "33" };
var country = "COL";
var data = { id: 1, ...person, country };
console.log(data);

// Rest
function sum(num, ...values) {
  console.log(values);
  console.log(num + values[0]);
  return num + values[0];
}
sum(8, 10, 20);

function newUser(name, age, country) {
  var name = name || 'Oscar';
  var age = age || 32;
  var country = country || 'COL';
  console.log(name, age, country);
}

newUser();
newUser('Javier', 30, 'ARG');

function newUser1(name = 'Andres', age = 32, country = 'COL') {
  var name;
  var age;
  var country;
  console.log(name, age, country);
}

newUser1();
newUser1('Carlos', 34, 'COL');

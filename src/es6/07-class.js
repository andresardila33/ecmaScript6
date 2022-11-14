// declarando
class User {

  constructor(name = 'julian') {
    this.name = name;
  }
  gretting() {
    return 'Hello';
  }
};
//instancia
const andev = new User(/* 'andres' */);
console.log(`${andev.gretting()} ${andev.name}`);
const gndx = new User(/* 'george' */);
console.log(`${gndx.gretting()} ${gndx.name}`);

class User1 {

  constructor(name = 'andres') {
    this.name = name;
  }
  speak() {
    return 'Hello';
  };
  greeting() {
    return `${this.speak()} ${this.name}`;
  };
};
const saludo = new User1('Ana');
console.log(saludo.greeting());

class User2 {

  constructor(name = 'andres', age = 32) {
    this.name = name;
    this.age = age;
  }
  speak() {
    return 'Hello';
  };
  greeting() {
    return `${this.speak()} ${this.name}`;
  };
  get uAge() {
    return this.age;
  };
  set uAge(n) {
    return this.age = n;
  };
};
const saludo2 = new User2();
console.log(saludo2.uAge = 42);


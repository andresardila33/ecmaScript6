function* iterate(array) {
  for (let value of array)
    yield value;
}
const i = iterate(['oscar', 'andres', 'ana', 'jhon', 'xiomara']);
console.log(i.next().value);
console.log(i.next().value);
console.log(i.next().value);
console.log(i.next().value);
console.log(i.next().value);
console.log(i.next().value);

/* export */ function* getId() {
  // Tu código aquí
  let lastId = 1;
  while (true) {
    yield console.log(lastId++);
  }
}
const id = getId()
id.next().value
id.next().value
id.next().value

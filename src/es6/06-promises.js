const anotherFunction = () => {
  return new Promise((resolve, reject) => {
    if(true) {
      resolve('Hey!!!')
    } else {
      reject('Oppss!!')
    }
  })
};
anotherFunction()
  .then(res => console.log(res))
  .catch(err => console.log(err));

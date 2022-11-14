// Object literals
function newUser(user, age, country, Uid = 'fsfgdg5156') {
  return {
    user,
    age,
    country,
    id: Uid,
  }
};
console.log(newUser('Andres', 32, 'COL', 'dhjsndndhj87424'));

//Проверка пароля

const bcrypt = require('bcrypt');

const hash = '$2b$10$ae2e.F3XYScq5PLWyz8LB.BS2g4d9ssqzgu9Cx4FJHseb8VIydBmm';
const password = 'popcorn123'; // Замени на предполагаемый пароль

bcrypt.compare(password, hash, (err, result) => {
  if (err) throw err;
  console.log(result ? 'Пароль верный' : 'Пароль неверный');
});

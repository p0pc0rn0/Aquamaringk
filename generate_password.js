const bcrypt = require('bcrypt');
const saltRounds = 10; // Проверь в server.js, какое значение
const password = 'P@$$w0rd123';

bcrypt.hash(password, saltRounds, (err, hash) => {
  if (err) throw err;
  console.log(hash);
});

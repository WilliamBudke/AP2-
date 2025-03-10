const bcrypt = require('bcryptjs');

let users = [
    { id: 1, name: "Admin", email: "admin@email.com", password: bcrypt.hashSync("123456", 10) }
];

module.exports = { users };
>>>>>>> ebeedc8 (Atividades avaliativa parte 1 e 2)

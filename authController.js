const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { users } = require('./db');

const SECRET_KEY = "seu_segredo_super_seguro";

const login = (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email);

    if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({ message: "Credenciais inválidas" });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, { expiresIn: '1h' });

    res.json({ token });
};

module.exports = { login };

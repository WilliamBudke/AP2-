const { users } = require('./db');

const getUsers = (req, res) => {
    res.json(users);
};

const addUser = (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ message: "Nome e e-mail são obrigatórios" });
    }
    const newUser = { id: users.length, name, email };
    users.push(newUser);
    res.status(201).json(newUser);
};

const updateUser = (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    const userIndex = users.findIndex(user => user.id == id);
    if (userIndex === -1) {
        return res.status(404).json({ message: "Usuário não encontrado" });
    }

    users[userIndex] = { id: Number(id), name, email };
    res.json(users[userIndex]);
};

const deleteUser = (req, res) => {
    const { id } = req.params;
    const userIndex = users.findIndex(user => user.id == id);

    if (userIndex === -1) {
        return res.status(404).json({ message: "Usuário não encontrado" });
    }

    users.splice(userIndex, 1);
    res.status(204).send();
};

module.exports = { getUsers, addUser, updateUser, deleteUser };

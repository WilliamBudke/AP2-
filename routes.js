const express = require('express');
const { getUsers, addUser, updateUser, deleteUser } = require('./controllers');
const { login } = require('./authController');
const { verifyToken } = require('./authMiddleware');

const router = express.Router();

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Autentica um usuário e retorna um token JWT
 *     tags: [Autenticação]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Token JWT gerado com sucesso
 *       401:
 *         description: Credenciais inválidas
 */
router.post('/login', login);

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retorna a lista de usuários (protegido)
 *     tags: [Usuários]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de usuários retornada com sucesso
 *       403:
 *         description: Token necessário
 */
router.get('/users', verifyToken, getUsers);

router.post('/users', verifyToken, addUser);
router.put('/users/:id', verifyToken, updateUser);
router.delete('/users/:id', verifyToken, deleteUser);

module.exports = router;


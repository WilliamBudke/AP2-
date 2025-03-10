const jwt = require('jsonwebtoken');
const SECRET_KEY = "seu_segredo_super_seguro";

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(403).json({ message: "Token necessário" });
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: "Token inválido ou expirado" });
    }
};

module.exports = { verifyToken };

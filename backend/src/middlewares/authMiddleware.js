const jwt = require('jsonwebtoken');
const config = require('./../../config/config');
const User = require('../models/User');

const authMiddleware = async (req, res, next) => {

    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized - Missing token' });
    }

    try {

        const decodedToken = jwt.verify(token, config.jwtSecret);

        const user = await User.findByPk(decodedToken.userId);

        if (!user) {
            return res.status(401).json({ error: 'Unauthorized - Invalid token' });
        }

        req.user = user;

        next();
    } catch (error) {
        return res.status(401).json({ error: 'Unauthorized - Invalid token' });
    }
};

module.exports = authMiddleware;

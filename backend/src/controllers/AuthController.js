const express = require('express');
const router = express.Router();
const AuthService = require('../services/AuthService');

router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const newUser = await AuthService.registerUser({ username, email, password });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const token = await AuthService.loginUser({ email, password });

        if (!token) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
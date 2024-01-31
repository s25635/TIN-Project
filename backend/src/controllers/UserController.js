const express = require('express');
const router = express.Router();
const UserService = require('../services/UserService');

router.get('/users', async (req, res) => {
    try {
        const users = await UserService.getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/users/:id', async (req, res) => {
    const userId = req.params.id;

    try {
        const user = await UserService.getUserById(userId);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/users', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const newUser = await UserService.createUser({ username, email, password });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.put('/users/:id', async (req, res) => {
    const userId = req.params.id;
    const { username, email, password } = req.body;

    try {
        const updatedUser = await UserService.updateUser(userId, { username, email, password });

        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.delete('/users/:id', async (req, res) => {
    const userId = req.params.id;

    try {
        const deletedUser = await UserService.deleteUser(userId);

        if (!deletedUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;

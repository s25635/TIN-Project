const User = require('../models/User');

class UserService {
    static async getAllUsers() {
        return await User.findAll();
    }

    static async getUserById(userId) {
        return await User.findByPk(userId);
    }

    static async createUser({ username, email, password }) {
        return await User.create({ username, email, password });
    }

    static async updateUser(userId, { username, email, password }) {
        const user = await User.findByPk(userId);

        if (!user) {
            return null;
        }

        user.username = username;
        user.email = email;
        user.password = password;

        await user.save();

        return user;
    }

    static async deleteUser(userId) {
        const user = await User.findByPk(userId);

        if (!user) {
            return null;
        }

        await user.destroy();

        return user;
    }
}

module.exports = UserService;

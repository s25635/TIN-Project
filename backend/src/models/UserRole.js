const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const UserRole = sequelize.define(
    'UserRole',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        expirationDate: {
            type: DataTypes.DATE,
            allowNull: true,
        },
    },
    {
        tableName: 'user_roles',
    }
);

module.exports = UserRole;


const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const Role = sequelize.define(
    'Role',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    },
    {
        tableName: 'roles',
    }
);

module.exports = Role;
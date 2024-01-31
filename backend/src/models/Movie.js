const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const Movie = sequelize.define(
    'Movie',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        genre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        releaseYear: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        tableName: 'movies',
    }
);

module.exports = Movie;

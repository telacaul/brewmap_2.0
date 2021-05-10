const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}


User.init (
    {
        // data goes here
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);


module.exports = User;
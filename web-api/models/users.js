import { Model, DataTypes } from 'sequelize';
import sequelize from '../loaders/db';

class Users extends Model {}
Users.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    pass: DataTypes.STRING
}, {
    sequelize,
    modelName: 'users'
});

module.exports = Users;
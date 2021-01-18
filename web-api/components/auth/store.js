import Users from '../../models/users';
import jqt from 'jsonwebtoken';

async function validateUser(email) {
    return await Users.findAll({
        attributes: ['id', 'name', 'email', 'pass'],
        where: {
            email: email
        }
    })
}

module.exports = {
    validateUser
}
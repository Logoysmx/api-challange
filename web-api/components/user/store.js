import Users from '../../models/users';

async function getUsers() {
    const res = await Users.findAll({
        attributes: ['id', 'name', 'email'],
    });
    return res;
}

async function createUser(name, email, pass) {
    const user = await Users.create({
        name,
        email,
        pass
    });
    return user;
}

module.exports = {
    getUsers,
    createUser
}
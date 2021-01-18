import { stream } from 'winston';
import store from './store';
import bcrypt from 'bcrypt';

function getUsers() {
    return new Promise((resolve, reject) => {
        resolve(store.getUsers());
    });
}

function createUser(params) {
    return new Promise(async (resolve, reject) => {
        const { name, email, pass } = params;
        const salt = await bcrypt.genSalt(10);
        const password = await bcrypt.hash(pass, salt);
        if (!name || !email || !pass) {
            reject('Invalid data');
        }        
        resolve(store.createUser(name, email, password));
    });
}

module.exports = {
    getUsers,
    createUser
}
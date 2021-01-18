import store from './store';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

function auth(params) {
    return new Promise(async (resolve, reject) => {
        const { email, password } = params;
        const result = await store.validateUser(email);
        const row = result[0];
        if(result.length == 0) {
            reject('Check email or password');
        } else {
            try {
                if (await bcrypt.compare(password, row.pass)) {
                    //jwt
                    const token = jwt.sign(
                        {row}, 
                        process.env.SEED, {
                        expiresIn: 86400 //one day
                    });
                    resolve({token});
                } else {
                    reject('Check email or password');    
                }
            } catch {
                reject('Check email or password');
            }
        }
    });
}

module.exports = {
    auth
}

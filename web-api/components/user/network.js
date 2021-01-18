import express from 'express';
import response from '../../network/response';
import demoController from './controller';

let router = express.Router();

router.get('/', async (req, res) => {
    demoController.getUsers()
    .then(users => {
        response.success(req, res, 200, users);
    })
    .catch(err => {
        response.success(req, res, 500, err);
    })
});

router.post('/', async (req, res) => {
    demoController.createUser(req.body)
    .then(newUser => {
        response.success(req, res, 200,  newUser);
    })
    .catch(err => {
        response.success(req, res, 500,  err);
    });
});

module.exports = router;
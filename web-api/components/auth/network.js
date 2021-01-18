import express from 'express';
import response from '../../network/response';
import authController from './controller';

let router = express.Router();

router.post('/', async (req, res) => {
    authController.auth(req.headers)
    .then(login => {
        response.success(req, res, 200, login);
    })
    .catch(err => {
        response.success(req, res, 401, {error: err});
    })
});

module.exports = router;
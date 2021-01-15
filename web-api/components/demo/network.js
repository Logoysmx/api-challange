import express from 'express';
import response from '../../network/response';
import demoController from './controller';

let router = express.Router();

router.get('/', (req, res) => {
    demoController.test('user', 'Mensaje');
    response.success(req, res, "Testing...");
});

module.exports = router;
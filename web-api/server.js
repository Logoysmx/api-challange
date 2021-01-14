import express from 'express';
import bodyParser from 'body-parser';
import response from './network/response';

let router = express.Router();
let app = express();

app.use(router);
app.use(bodyParser.json({extended: false}));

router.get('/message', function(req, res) {
    response.success(req, res);
});

app.listen(3000);



const express = require('express');
const router = express.Router();

var app = express();
app.use(router);

router.get('/', function(req, res) {
    res.send('hello');
});

app.listen(3000);



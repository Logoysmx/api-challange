import express from 'express';
import bodyParser from 'body-parser';

import router from './network/routes';

let app = express();

app.use(bodyParser.json({extended: false}));

// Custom server configuration router(server)
router(app);

app.listen(3000);



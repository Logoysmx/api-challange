import express from 'express';
import bodyParser from 'body-parser';
import router from './network/routes';
import dotenv from "dotenv";
import sequelize from './loaders/db';
import cors from 'cors';

async function dbInit() {
    console.log('Connecting...');
    try {
        await sequelize.authenticate();
        console.log('Connected');
        await sequelize.sync({ force: false});
        console.log('Sincronizado');
    } catch (err) {
        console.log('Unable to connect');
        process.exit(1);
    }
}

async function startServer() {
    dotenv.config();
    await dbInit();
    const app = express();
    const port = process.env.PORT;

    //CORS
    const corsOpts = {
        allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "Authorization"],
        credentials: true,
        methods: "GET,PUT,PATCH,POST,DELETE",
        origin: function(origin, callback) {
            const whiteList = ['http://localhost:4200', 'http://localhost', 'http://localhost:8000'];
            if (typeof origin !== 'undefined') {
                if (whiteList.indexOf(origin) !== -1 || !origin) {
                    callback(null, true);
                } else {
                    callback(new Error('Not allowed by CORS'));
                }                     
            } else {
                callback(null, true);
                // callback(new Error('Not allowed by CORS'));
            }
        },
        preflightContinue: false
    };
    app.use(cors());

    //BodyParser
    app.use(bodyParser.json({extended: false}));

    // Custom server configuration router(server)
    router(app);
    
    app.listen(port, (err) => {
        if(err){
            process.exit(1);
        }        
        console.log(`
        ################################################
        🏁  Server listening on port: ${port}         🏁 
        ################################################`);
    });
}

startServer();

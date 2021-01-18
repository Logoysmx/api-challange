import Sequelize from 'sequelize';

const sequelize = new Sequelize('test_api', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb',
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

// const foo = UserModel(sequelize, Sequelize);
// const Test = TestModel(sequelize, Sequelize);

// foo.findAll().then(res => console.log('=> ', res));

// sequelizeConn.authenticate().then(() => console.log('OK'));
// sequelize.sync({ force: false }).then(() => console.log('Listo'));

module.exports = sequelize;
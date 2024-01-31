module.exports = {
    development: {
        database: {
            name: 'your_dev_database',
            username: 'your_dev_username',
            password: 'your_dev_password',
            host: 'localhost',
            dialect: 'postgres',
        },
        jwtSecret: 'your_jwt_secret_key',
    },
    production: {
        database: {
            name: 'your_prod_database',
            username: 'your_prod_username',
            password: 'your_prod_password',
            host: 'your_prod_db_host',
            dialect: 'postgres',
        },
        jwtSecret: 'your_jwt_secret_key',
    },
};
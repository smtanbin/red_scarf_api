const config = {
    db: { /* do not put password or any sensitive info here, done only for demo */
        host: '127.0.0.1',
        port: '5432',
        user: 'postgres',
        password: 'root',
        database: 'RED_SCARF',
        // to auto-exit on idle, without having to shut-down the pool;
        // see https://github.com/vitaly-t/pg-promise#library-de-initialization

        allowExitOnIdle: true
    },
    listPerPage: 10,
};

module.exports = config;
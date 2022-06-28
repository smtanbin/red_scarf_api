
const promise = require('bluebird'); // or any other Promise/A+ compatible library;

const initOptions = {
    promiseLib: promise // overriding the default (ES6 Promise);
};

const pgp = require('pg-promise')(initOptions);
// See also: http://vitaly-t.github.io/pg-promise/module-pg-promise.html

// Database connection details;
const config = require('./config');

// https://github.com/brianc/node-postgres/blob/master/packages/pg/lib/defaults.js

const pg = pgp(config.db); // database instance;



const db = (param) => {

    pg.any(param).then(data => { return data })
    // .catch(error => {
    //     console.log('ERROR:', error); // print the error;
    //     return error
    // });

}
module.exports = { db }
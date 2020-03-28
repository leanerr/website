const database = require('./database');
const session = require('./session');
const layout = require('./layout');
const service = require('./service');

module.exports = {
    database,
    session,
    layout,
    service,
    port : process.env.PORT,
    cookie_secretkey : process.env.COOKIE_SECRETKEY,
    debug : false ,
    siteurl : process.env.WEBSITE_URL
};
const express = require('express');
const config = require('./config/config');
const logger = require('morgan');
let app = express();

let env = 'development';
require('./config/database')(config[env]);
require('./config/express')(app, config[env]);
require('./config/passport')();
require('./config/routes.js')(app);

module.exports = app;

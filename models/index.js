const dbConfig = require('../../../CSE341-groupproject/cse341-ww-student-code/config/db.config.js');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.temples = require('./temples.js')(mongoose);

module.exports = db;

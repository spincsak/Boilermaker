const db = require('./db');

//register all models
//combine all the models into a file: ./models/index.js
require('./models');

module.exports = db;

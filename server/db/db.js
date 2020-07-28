const Sequelize = require('sequelize');
const databaseName = 'databoiler';

const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:8080/${databaseName}`,
  {
    logging: false,
  }
);

module.exports = db;

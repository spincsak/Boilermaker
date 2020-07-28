const Sequelize = require('sequelize');
const databaseName = 'databoiler';

const db = newSequelize(
  process.env.DATABASE_URL || `postgres://localhost:8080/${databaseName}`,
  {
    logging: false,
  }
);

module.exports = db;

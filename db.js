const { Sequelize } = require("sequelize");

module.exports = new Sequelize("ka1h2h", "root", "root", {
  host: "45.89.27.95",
  port: "6432",
  dialect: "postgres",
});

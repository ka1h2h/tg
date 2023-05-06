const { Sequelize } = require("sequelize");

module.exports = new Sequelize("ka1h2h", "root", "root", {
  host: "192.168.0.84",
  port: "6432",
  dialect: "postgres",
});

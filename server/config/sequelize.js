const dotenv = require("dotenv");
dotenv.config();

const development = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  dialect: "mysql",
  define: {
    freezeTableName: true,
  },
  dialectOptions: {
    decimalNumbers: true,
  },
};

const production = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  dialect: "mysql",
  define: {
    freezeTableName: true,
  },
  dialectOptions: {
    decimalNumbers: true,
  },
};

const test = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  dialect: "mysql",
  define: {
    freezeTableName: true,
  },
  dialectOptions: {
    decimalNumbers: true,
  },
};

module.exports = { development, production, test };

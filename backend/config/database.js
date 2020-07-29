const config = require("./");

const db = config.db;
const username = db.username;
const password = db.password;
const database = db.database;
const host = db.host;


module.exports = {
  development: {
    username,
    password,
    database,
    host,
    dialect: 'postgres',
    seederStorage: 'sequelize',
  },
  test: {
    dialect: "sqlite",
    DB_CONN: "sqlite.memory",
    logging: false,
    seederStorage: 'sequelize',
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    seederStorage: 'sequelize',
  },
};

// module.exports = {
//   development: {
//     logging,
//     username,
//     password,
//     database,
//     host,
//     dialect: "postgres",
//   },
//   production: {
//     dialect: 'postgres',
//     seederStorage: 'sequelize',
//     use_env_variable: 'DATABASE_URL'
//   }
//   // production: {
//   //   use_env_variable: 'DATABASE_URL',
//   // },
// };

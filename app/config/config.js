require('dotenv').config();
module.exports = {
  "development": {
    "username":  process.env.LOCAL_USERNAME,
    "password": process.env.LOCAL_PASSWORD,
    "database": process.env.LOCAL_DATABASE,
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "admin ",
    "password": "admin",
    "database": "demo_for_node",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "admin ",
    "password": "admin",
    "database": "demo_for_node",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

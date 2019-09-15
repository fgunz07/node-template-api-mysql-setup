require('dotenv').config()
const fs = require('fs')

module.exports = {
	username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    // additional configuration
    /**
     *dialectOptions: {
     *  ssl: {
     *    ca: fs.readFileSync(__dirname + '/mysql-ca-master.crt')
     *  }
     *}
     */
}
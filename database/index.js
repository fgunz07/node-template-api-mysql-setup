const Sequelize = require('sequelize')
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
	host: process.env.DB_HOST,
	dialect: process.env.DB_DIALECT,
	/**
	 * By default sequelize has a connection pool use this configuration to make your own
	 * pool: {
	 *	max: 5,
	 *   min: 0,
	 *   acquire: 30000,
	 *   idle: 10000
	 * }
	 */
})

const testConnection = sequelize
	.authenticate()
	.then(() => {
		console.log('Database connection has been established successfully.')
	})
	.catch(err => {
		console.error('Unable to connect to the database:', err)
	})

exports = {
	sequelize,
	testConnection
}
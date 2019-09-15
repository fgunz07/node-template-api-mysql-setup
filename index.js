require('dotenv').config()
const express = require('express')
const app = express()
const router = require('./routes')
const { appMiddlewares, routeMiddlewares } = require('./middlewares')(app)
const { testConnection } = require('./database')

// call middlewares
appMiddlewares()
routeMiddlewares()

router(app, express)

app.listen(process.env.APP_PORT, () => {
	testConnection
	console.log('Server running port: %s', process.env.APP_PORT)
})

/**
 * Handle middlewares
 * @param  express initialized app
 * @return void
 */
module.exports = function middlewares(app) {
	// imports
	const compression = require('compression')
	const bodyParser = require('body-parser')
	// import custom middleware
	const ExampleMiddleware = require('./ExampleMiddleware')
	
	
	const appMiddlewares = () => {
		app.use(compression())
		app.use(bodyParser.json())
		app.use(bodyParser.urlencoded({ extended: false }))
	}

	const routeMiddlewares = () =>{
		// register middlewares
		// app.use('/user/:id', middleware)
		app.use('/example', ExampleMiddleware)
	}

	return {
		appMiddlewares,
		routeMiddlewares
	}
}
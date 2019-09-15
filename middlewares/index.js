/**
 * Handle middlewares
 * @param  {[express initialization]} app
 * @return {[void]}
 */
module.exports = function middlewares(app) {
	// imports
	const compression = require('compression')
	const bodyParser = require('body-parser')
	// import custom middleware
	const ExampleMiddleware = require('./ExampleMiddleware')
	// import routers
	const { example } = require('../routes')
	
	
	const appMiddlewares = () => {
		app.use(compression())
		app.use(bodyParser.json())
		app.use(bodyParser.urlencoded({ extended: false }))
	}

	const routeMiddlewares = () =>{
		// register middlewares
		// app.use('/user/:id', middleware)
		// newRouter.use(ExampleMiddleware)
		app.use('/example', ExampleMiddleware)
	}

	return {
		appMiddlewares,
		routeMiddlewares
	}
}
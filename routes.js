/**
 * Handle Routes
 * @param  express initialization app    
 * @param  Express express
 * @return void
 */
module.exports = function router(app, express) {
	// import controllers
	const { index } = require('./controllers/ExampleController') 
	// define routers
	const example = express.Router()

	example.route('/').get(index)

	app.get('/', (req, res) => {
		res.json({ message: 'Node template server is running ...'})
	})

	/**
	 * ---------------------------
	 * Inject this modules router
	 * ---------------------------
	 */
	app.use('/example', example)
}
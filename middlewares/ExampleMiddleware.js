const ExampleMiddleware = (req, res, next) => {
	console.log(req.method, req.url)
	next()
}

module.exports = ExampleMiddleware
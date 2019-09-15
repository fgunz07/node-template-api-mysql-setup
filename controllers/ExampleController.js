const index = (req, res) => {
	res.json({ message: 'Example index controller.' })
}

const edit = (req, res) => {
	res.json({ message: 'Example edit controller.' })
}

const show = (req, res) => {
	res.json({ message: 'Example show controller.' })
}

const store = (req, res) => {
	res.json({ message: 'Example store controller.' })
}

const update = (req, res) => {
	res.json({ message: 'Example update controller.' })
}

const destroy = (req, res) => {
	res.json({ message: 'Example delete controller.' })
}

module.exports = {
	index,
	edit,
	show,
	store,
	update,
	destroy
}
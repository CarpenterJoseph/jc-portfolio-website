const Project = require('../models/Project')

module.exports = function (app) {
	//get all projects
	app.get('/api/projects/', (req, res) => {
		Project.find({}, (err, docs) => {
			if (!err) {
				res.send(docs)
			} else {
				res.send({error: err})
			}
		})
	})

	app.get('/api/projects/:projectID', (req, res) => {
		let projectID = req.params.projectID
		Project.findById(projectID, (err, project) => {
			if (!err) {
				res.send(project)
			} else {
				res.send({error: err})
			}
		})
	})

	app.post('/api/projects/', (req, res) => {
		let project = req.body

		console.log(project)

		Project.create(project, (err, project) => {
			if (!err) {
				res.send(project)
			} else {
				res.send({error: err})
			}
		})
	})
}
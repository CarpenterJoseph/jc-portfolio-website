const Express = require('express')
const Router = Express.Router()

const Project = require('../models/Project')

//get all projects
Router.get('/', (req, res) => {
	Project.find({}, (error, docs) => {
		if (!error) {
			res.send(docs)
		} else {
			res.send({error: error})
		}
	})
})

//get by id
Router.get('/:projectID', (req, res) => {
	let projectID = req.params.projectID
	Project.findById(projectID, (error, project) => {
		if (!error) {
			res.send(project)
		} else {
			res.send({error: error})
		}
	})
})

//post
Router.post('/', (req, res) => {
	let project = req.body
	Project.create(project, (error, project) => {
		if (!error) {
			res.send(project)
		} else {
			res.send({error: error})
		}
	})
})

//update user
Router.put('/:projectID', (req, res) => {
	let projectID = req.params.projectID
	let newProjectEdit = req.body

	Project.findById(projectID, (error, project) => {
		if (!error) {
			project.name = newProjectEdit.name || project.name
			project.description = newProjectEdit.description || project.description
			project.picture_url = newProjectEdit.picture_url || project.picture_url
			project.save((error, updatedProject) => {
				if (!error) {
					res.send(updatedProject)
				} else {
					res.send(error)
				}
			})
		} else {
			res.send({error: error})
		}
	})
})
//delete user by id
Router.delete('/:projectID', (req, res) => {
	let projectID = req.params.projectID
	Project.findById(projectID, (error, project) => {
		if (!error) {
			project.remove((error) => {
				if (!error) {
					res.send('PROJECT DELETED')
				} else {
					res.send({error: error})
				}
			})
		} else {
			res.send({error: error})
		}
	})
})

module.exports = Router
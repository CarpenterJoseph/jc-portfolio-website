const express = require('express')
const router = express.Router()

const project = require('../models/project')

//get all projects
router.get('/', (req, res) => {
	project.find({}, (error, docs) => {
		if (!error) {
			res.send(docs)
		} else {
			res.send({error: error})
		}
	})
})

//get by id
router.get('/:projectID', (req, res) => {
	let projectID = req.params.projectID
	project.findById(projectID, (error, project) => {
		if (!error) {
			res.send(project)
		} else {
			res.send({error: error})
		}
	})
})

//post
router.post('/', (req, res) => {
	let project = req.body
	project.create(project, (error, project) => {
		if (!error) {
			res.send(project)
		} else {
			res.send({error: error})
		}
	})
})

//update user
router.put('/:projectID', (req, res) => {
	let projectID = req.params.projectID
	let newProjectEdit = req.body
	project.findById(projectID, (error, project) => {
		console.log(error)
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
router.delete('/:projectID', (req, res) => {
	let projectID = req.params.projectID
	project.findById(projectID, (error, user) => {
		if (!error) {
			user.remove((error) => {
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

module.exports = router
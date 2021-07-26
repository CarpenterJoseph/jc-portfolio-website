const express = require('express')
const router = express.Router()
const Project = require('../models/Project')

//get all projects
router.get('/', (req, res) => {
	Project.find({}, (err, docs) => {
		if (!err) {
			res.send(docs)
		} else {
			res.send({error: err})
		}
	})
})

router.get('/:projectID', (req, res) => {
	let projectID = req.params.projectID
	Project.findById(projectID, (err, project) => {
		if (!err) {
			res.send(project)
		} else {
			res.send({error: err})
		}
	})
})

router.post('/', (req, res) => {
	let project = req.body
	Project.create(project, (err, project) => {
		if (!err) {
			res.send(project)
		} else {
			res.send({error: err})
		}
	})
})

module.exports = router
const express = require('express')

//database
const db = require('./db')

//config
const app = express()
const port = 3001
const apiURL = "/api"
const mongoURL = process.env.MONGODB_URL || 'mongodb://localhost:27017/projects'

//middleware
app.use(express.json())

//controllers
app.use(`${apiURL}/projects`, require("./controllers/projectsController"))

db.connect(mongoURL)

app.listen(port, () => {
	console.log(`Server listening on port ${port}`)
})
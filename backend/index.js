const Express = require('express')

//database
const DB = require('./db')

//config
const app = Express()
const port = 3001
const apiURL = "/api"
const mongoURL = process.env.MONGODB_URL || 'mongodb://localhost:27017/projects'

//middleware
app.use(Express.json())

//controllers
app.use(`${apiURL}/projects`, require("./controllers/projectsController"))

DB.connect(mongoURL)

app.listen(port, () => {
	console.log(`Server listening on port ${port}`)
})
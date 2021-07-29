const Express = require('express')
const Cors = require('cors')

//database
const DB = require('./DB')

//config
const app = Express()
const port = 3001
const apiURL = "/api"
const mongoURL = process.env.MONGODB_URL || 'mongodb://localhost:27017/projects'


//middleware
app.use(Express.json())
app.use(Cors({
	origin: "*"
}))

//controllers
app.use(`${apiURL}/projects`, require("./controllers/ProjectsController"))

DB.connect(mongoURL)

app.listen(port, () => {
	console.log(`Server listening on port ${port}`)
})
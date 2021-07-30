const Express = require('express')
const Cors = require('cors')

//database
const DB = require('./DB')

//config
require('dotenv').config()
const app = Express()
const port = process.env.PORT
const apiURL = "/api"
const mongoURL = process.env.MONGODB_URL
DB.connect(mongoURL)

//middleware
app.use(Express.json())
app.use('/static', Express.static('public'))
app.use(Cors({
	origin: "*"
}))

//controllers
app.use(`${apiURL}/projects`, require("./controllers/ProjectsController"))

//listen
app.listen(port, () => {
	console.log(`Server listening on port ${port}`)
})
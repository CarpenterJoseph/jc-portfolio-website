const Express = require('express')
const Cors = require('cors')

//config
require('dotenv').config()
const app = Express()
const port = process.env.PORT
const mongoURL = process.env.MONGODB_URL
const corsOrigin = process.env.CORS_ORIGIN
const apiURL = '/api'

//database
const DB = require('./DB')
DB.connect(mongoURL)

//middleware
app.use(Express.json())
app.use(Cors({
	origin: corsOrigin
}))
app.use('/static', Express.static('public'))

//controllers
app.use(`${apiURL}/projects`, require('./controllers/ProjectsController'))

//listen
app.listen(port, () => {
	console.log(`Server listening on port ${port}`)
})
const Express = require('express')

const DB = require('./DB')

//config
const app = Express()
const port = 3000

app.use(Express.json())

const mongoURL = process.env.MONGODB_URL || 'mongodb://localhost:27017/projects'
DB.connect(mongoURL)

require('./routes/Projects')(app)

app.listen(port, () => {
	console.log(`Server listening on port ${port}`)
})
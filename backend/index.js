const Express = require('express')

//database
const DB = require('./DB')

//config
const app = Express()
const port = 3000

//middleware
app.use(Express.json())

//routes
app.use("/api/projects", require("./routes/Projects"))



const mongoURL = process.env.MONGODB_URL || 'mongodb://localhost:27017/projects'
DB.connect(mongoURL)



app.listen(port, () => {
	console.log(`Server listening on port ${port}`)
})
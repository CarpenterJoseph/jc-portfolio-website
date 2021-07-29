const Mongoose = require('mongoose')

function connect(mongoURL) {
	Mongoose.connect(mongoURL, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	}).then(r => {
		console.log(`Connected to mongodb at ${mongoURL}`)
	}).catch(error => {
		console.log(error)
	})
}

module.exports = {connect}



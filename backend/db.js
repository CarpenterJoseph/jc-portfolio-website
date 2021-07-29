const mongoose = require('mongoose')

function connect(mongoURL) {
	try {
		mongoose.connect(mongoURL, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		}).then(r => {
			console.log(`connected to mongodb at ${mongoURL}`)
		})
	} catch (error) {
		console.log(error)
	}
}

module.exports = {connect}



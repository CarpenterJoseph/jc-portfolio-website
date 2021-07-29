const Mongoose = require("mongoose")

module.exports = Mongoose.model("project", Mongoose.Schema({
	"name" : String,
	"description" : String,
	"picture_url" : String
}),"projects")
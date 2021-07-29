const mongoose = require("mongoose")

module.exports = mongoose.model("project", mongoose.Schema({
	"name" : String,
	"description" : String,
	"picture_url" : String
}, {minimize: false}),"projects")
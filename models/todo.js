var mongoose = require("mongoose");

var todoSchema = new mongoose.Schema({
	name: {
		type: String,
		required: "Name can't be Blank!"
	}, 
	completed: {
		type: Boolean, 
		default: false
	}, 
	created_date: {
		type: Date, 
		default: Date.Now
	}
});

var ToDo = mongoose.model("ToDo", todoSchema);

module.exports = ToDo;
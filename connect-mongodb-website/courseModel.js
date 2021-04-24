const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = Promise;

mongoose
	.connect('mongodb://localhost:27017/meanstack', {
		keepAlive: true,
		useFindAndModify: false
	})
	.then(console.log('MongoDB successfully connected'));

const courseSchema = new mongoose.Schema({
	id: {
		type: Number,
		unique: true
	},
	name: {
		type: String
	},
	description: {
		type: String
	},
	amount: {
		type: Number
	}
});

const Course = mongoose.model('Course', courseSchema);

module.exports.Course = Course;

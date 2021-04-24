const db = require('./courseModel');

exports.addCourse = async function(req, res) {
	try {
		await db.Course.create(req.body);
		return res.redirect('/');
	} catch (err) {
		return res.status(500).json({
			message: err.message
		});
	}
};

exports.getAllCourses = async function(req, res) {
	try {
		let courses = await db.Course.find();
		return res.status(200).json(courses);
	} catch (err) {
		return res.status(404).json({
			message: err.message
		});
	}
};

exports.updateCourse = async function(req, res) {
	if (!req.body) {
		return res.status(400).json({
			message: 'Response Body cannot be empty'
		});
	}

	const id = req.body.id;
	await db.Course
		.findOneAndUpdate({ id: id }, { amount: req.body.amount }, { useFindAndModify: false })
		.then((data) => {
			if (!data) {
				res.status(404).send({
					message: `Cannot update course with id=${id}. Id not found`
				});
			} else {
				return res.status(200).send({
					message: 'success'
				});
			}
		})
		.catch((err) => {
			return res.status(500).json({
				message: err.message
			});
		});
};

exports.deleteCourse = async function(req, res) {
	try {
		await db.Course.findOneAndRemove({ id: req.body.id }).then((detail) => {
			return res.redirect('/');
		});
	} catch (err) {
		return res.status(500).json({
			message: err.message
		});
	}
};

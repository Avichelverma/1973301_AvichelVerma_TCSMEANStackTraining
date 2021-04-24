const express = require('express');
const { get } = require('mongoose');
const router = express.Router({ mergeParams: true });

const { addCourse, getAllCourses, updateCourse, deleteCourse } = require('./courseController');

router.route('/').get(getAllCourses).post(addCourse).put(updateCourse).delete(deleteCourse);

module.exports = router;

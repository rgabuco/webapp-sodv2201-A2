const express = require('express');
const courseController = require('../controllers/courseController');

const router = express.Router();

// Route to get all courses and create a course
router
    .route('/')
    .get(courseController.getAllCourses)
    .post(courseController.createCourse);

// Route to get, update, and delete a course
router
    .route('/:id')
    .get(courseController.getCourse)
    .patch(courseController.updateCourse)
    .delete(courseController.deleteCourse);

module.exports = router;
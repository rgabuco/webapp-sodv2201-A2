const express = require('express');

const router = express.Router();
const programController = require('../controllers/programController');

// Route to get all programs
router.get('/programs', programController.getAllPrograms);

// Route to create a new program
router.post('/programs', programController.createProgram);

// Route to add a new course to a program using programCode
router.post('/:programCode/courses', programController.addCourse);

// Route to update a course in a program using programCode and courseCode
router.put('/:programCode/courses/:courseCode', programController.updateCourse);

// Route to delete a course in a program using programCode and courseCode
router.delete(
    '/:programCode/courses/:courseCode',
    programController.deleteCourse,
);

module.exports = router;

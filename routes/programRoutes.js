const express = require('express');
const programController = require('../controllers/programController');

const router = express.Router();

// Route to get all programs and create a program
router
    .route('/').get(programController.getAllPrograms)
    .post(programController.createProgram);

// Route to get, update, and delete a program
router
    .route('/:id')
    .get(programController.getProgram)
    .patch(programController.updateProgram)
    .delete(programController.deleteProgram);

module.exports = router;

const express = require('express');
const formController = require('../controllers/formController');
const authController = require('../controllers/authController');

const router = express.Router();

// Route to get all forms and create a form
router
    .route('/')
    .get(authController.isAdmin, formController.getAllForms)
    .post(formController.createForm);

// Route to get, update and delete a form
router
    .route('/:id')
    .get(formController.getForm)
    .patch(formController.updateForm)
    .delete(authController.isAdmin, formController.deleteForm);

module.exports = router;

const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// Route to get all users and create a new user
router
    .route('/')
    .get(userController.getAllUsers)
    .post(userController.createUser);

// Route to get, update, and delete a user by ID
router
    .route('/:id')
    .get(userController.getUser)
    .patch(userController.updateUser)
    .delete(userController.deleteUser);

module.exports = router;
const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const router = express.Router();

//login and logout routes
router.post('/login', authController.login);
router.get('/logout', authController.logout);

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

// Route to get all courses of a user by ID
router
    .route('/:id/courses')
    .get(userController.getUserCourses);

module.exports = router;
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db');
const programCoursesRoutes = require('./routes/programCourseRoutes');
const mailRoutes = require('./routes/contactFormRoutes');

dotenv.config();

const app = express();
//connect to MongoDB
connectDB();
//middleware to parse json
app.use(express.json());

// Route setup
app.use('/api', programCoursesRoutes);
app.use('/api/messages', mailRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
//PROGRAMS and COURSES
//GET  http://localhost:5000/api/programs                         -see all program and courses
//POST http://localhost:5000/api/programs                         -for adding new program
//POST http://localhost:5000/api/{programId}/courses              -for ading new course
//PUT  http://localhost:5000/api/{programId}/courses/{courseId}   -for updating courses
//DELETE http://localhost:5000/api/{programId}/courses/{courseId} -for deleting course

//FORMS and CONTACT SUPPORT
// GET    http://localhost:5000/api/messages              - see all messages
// POST   http://localhost:5000/api/messages              - for adding a new message
// PUT    http://localhost:5000/api/messages/:id/read     - for marking message as read
// DELETE http://localhost:5000/api/messages/:id          - for deleting a message

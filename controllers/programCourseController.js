const Program = require('../models/programCoursesModel');
// get all programs
exports.getAllPrograms = async (req, res) => {
    try {
        const programs = await Program.find();
        res.json(programs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new program
exports.createProgram = async (req, res) => {
    try {
        const newProgram = new Program(req.body);
        await newProgram.save();
        res.status(201).json(newProgram);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
//add courses
exports.addCourse = async (req, res) => {
    try {
        const { programCode } = req.params;
        const newCourse = req.body;

        const program = await Program.findOne({ code: programCode });
        if (!program) {
            return res.status(404).json({ message: 'Program not found' });
        }

        program.courses.push(newCourse);
        await program.save();

        res.status(201).json({ message: 'Course added succesfully', program });
    } catch (error) {
        res.status(500).json({ message: 'Failed adding courses' });
    }
};

//edit
exports.updateCourse = async (req, res) => {
    try {
        const { programCode, courseCode } = req.params;
        const updatedData = req.body;

        const program = await Program.findOne({ code: programCode });
        if (!program) {
            return res.status(404).json({ message: 'Program not found' });
        }

        const course = program.courses.find(
            (course) => course.code === courseCode,
        );
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        Object.assign(course, updatedData);
        await program.save();
        res.status(200).json({
            message: 'Course updated successfully',
            program,
        });
    } catch (error) {
        res.status(500).json({ message: 'Failed updating course', error });
    }
};

//delete
exports.deleteCourse = async (req, res) => {
    try {
        const { programCode, courseCode } = req.params;

        const program = await Program.findOne({ code: programCode });
        if (!program) {
            return res.status(404).json({ message: 'Program not found' });
        }

        const courseIndex = program.courses.findIndex(
            (course) => course.code === courseCode,
        );
        if (courseIndex === -1) {
            return res.status(404).json({ message: 'Course not found' });
        }

        program.courses.splice(courseIndex, 1); // Remove the course from the array
        await program.save();
        res.status(200).json({
            message: 'Course deleted successfully',
            program,
        });
    } catch (error) {
        console.error('Error in deleteCourse:', error.message, error.stack);
        res.status(500).json({ message: 'Failed deleting course', error });
    }
};

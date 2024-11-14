const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
//const Program = require('../../models/programCoursesModel');
const Forms = require('../../models/contactFormsModel');

dotenv.config({ path: '../../.env' });

mongoose
    .connect(process.env.MONGO_URI, { dbName: 'Bowspace_Database' })
    .then((con) => {
        console.log('DB connection successful!');
    })
    .catch((err) => {
        console.error('DB connection error:', err);
        process.exit(1);
    });

// READ JSON FILE
// const programs = JSON.parse(
//     fs.readFileSync(`${__dirname}/../data/programCourses.json`, 'utf-8'),
// );
const contactForms = JSON.parse(
    fs.readFileSync(`${__dirname}/../data/contactForms.json`, 'utf-8'),
);

// IMPORT DATA INTO DB
const importData = async () => {
    try {
        //await Program.create(programs);
        await Forms.create(contactForms);
        console.log('Data is successfully loaded!');
    } catch (error) {
        console.log('Error importing data:', error);
    }
    process.exit();
};

// DELETE DATA FROM THE COLLECTION
const deleteData = async () => {
    try {
        //const countBefore = await Program.countDocuments();
        const countBefore = await Forms.countDocuments();
        console.log(`Documents before deletion: ${countBefore}`);

        //const result = await Program.deleteMany();
        const result = await Forms.deleteMany();
        console.log('Data successfully deleted!');
        console.log(`Deleted ${result.deletedCount} documents.`);

        //const countAfter = await Program.countDocuments();
        const countAfter = await Forms.countDocuments();
        console.log(`Documents after deletion: ${countAfter}`);
    } catch (error) {
        console.log('Error deleting data:', error);
    }
    process.exit();
};

if (process.argv[2] === '--import') {
    importData();
} else if (process.argv[2] === '--delete') {
    deleteData();
} else {
    console.log(
        'Invalid command. Use --import to import data or --delete to delete data.',
    );
    process.exit(1);
}

console.log(process.argv);

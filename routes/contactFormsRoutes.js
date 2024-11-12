const express =require('express');
const router=express.Router();
const mailController =require('../controllers/formsContactController');

//get all messages from forms
router.get('/',mailController.getAllMails);

//add a new message to forms
router.post('/',mailController.addMail);

//update message read status in forms
router.put('/:id/read',mailController.updateMailReadStatus);

//delete a message
router.delete('/:id',mailController.deleteMail);

module.exports=router;
const contactForms = require('../models/contactForms');

//get all message from the forms
exports.getAllMails = async (req,res)=>
{
    try
    {
        const mails=await contactForms.find();
        res.json(mails);
    }
    catch(error)
    {
        res.status(500).json({error:'failed getting messages'})
    }
};
//add a new message to the forms
exports.addMail=async(req,res)=>
{
    try
    {
        const {username, email, message}=req.body;
        const newMail = new contactForms({username,email,message});
        await newMail.save();
        res.status(201).json(newMail);
    }
    catch(error)
    {
        res.status(500).json({error:'Failed adding a message'});
    }
};
//updating message read status in forms
exports.updateMailReadStatus = async (req,res)=>
{
    try
    {
        const mailId = req.params.id;
        const mail = await contactForms.findById(mailId);
        if(!mail){
            return res.status(404).json({error:'Message not fount'});
        }

        mail.isRead=true;
        await mail.save();
        res.json(mail);
    }
    catch(error)
    {
        res.status(500).json({error:'Failed updating message read status'});
    }
};

//delete a message from forms
exports.deleteMail=async(req,res)=>
{
    try
    {
        const mailId=req.params.id;
        await contactForms.findByIdAndDelete(mailId);
        res.status(204).send();
    }
    catch(error)
    {
        res.status(500).json({error:'Failed to delete a message'});
    }
};

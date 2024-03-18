const Contact = require('../models/contact-model');

const createContact = async (req,res) =>{
    try {
        const {username, email, description} = req.body;

        const userExists = await Contact.findOne({ email });

        if (userExists) {
          return res.status(400).json({ msg: "email already exists.." });
        }

        const contactCreated = await Contact.create({username, email, description});

        console.log("createContact",req.body);

        res.status(201).send({data: contactCreated, message: "contact created..."});

    } catch (error) {
        console.error("createContact error",error);
        res.status(400).send({message: error});
    }
}

module.exports = {createContact};
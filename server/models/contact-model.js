const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    created:{
        type:Date,
        default: Date.now
    }

});

//define the model and schema
const Contact = new mongoose.model("Contact",contactSchema);

module.exports = Contact;
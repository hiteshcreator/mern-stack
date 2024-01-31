const mongoose = require('mongoose');

// Schema of table or fields of tables
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    phone:{
        type:Number,
        require:true,
    },
    is_admin:{
        type:Boolean,
        default:false,
    },
});


//define the model or the collection name
const User = new mongoose.model('Users',userSchema);

module.exports = User;
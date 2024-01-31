const User = require("../models/user-model");

const home = async (req,res) => {
    try{
        res.status(200).send({message:"welcome in controller"});
    }catch (error){
        res.status(400).send({message:error});
    }
};


const register = async (req,res) => {
    try{
        const {username,email,password,phone} = req.body;

        const userExists = await User.findOne({email});

        if(userExists){
            return res.status(400).json({msg:"email already exists.."});
        }

        const userCreated = await User.create({username,email,password,phone});

        res.status(200).json({data:userCreated});
    }catch (error){
       res.status(400).send({message:error});
    }
}

const dashboard = async (req,res) => {
    try{
        res.status(200).send({message:"welcome to dashboard"});
    }catch (error){
       res.status(400).send({message:error});
    }
}

module.exports = { home,register,dashboard};
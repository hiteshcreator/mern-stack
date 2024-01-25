const home = async (req,res) => {
    try{
        res.status(200).send({message:"welcome in controller"});
    }catch (error){
        res.status(400).send({message:error});
    }
};


const register = async (req,res) => {
    try{
        res.status(200).send({message:req.body});
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
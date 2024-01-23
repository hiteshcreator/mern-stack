const home = async (req,res) => {
    try{
        res.status(200).send("welcome in controller");
    }catch (error){
        console.log("error",error);
    }
};


const register = async (req,res) => {
    try{
        res.status(200).send("welcome to registration page controllers");
    }catch (error){
       res.status(400).send("Page is not found!!!");
    }
}

const dashboard = async (req,res) => {
    try{
        res.status(200).send("welcome to dashboard");
    }catch (error){
       res.status(400).send("Page is not found!!!");
    }
}

module.exports = { home,register,dashboard};
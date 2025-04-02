const User = require("../models/contactModel.js");

const createUser = async (req,res)=>{
    try{
        const {name,email,message} = req.body;
        const user = new User({
            name,
            email,
            message
        })
        await user.save()
        res.status(201).json(user);
    } catch(error){
        console.log("there is an error:",error)
        res.status(500).json({message: "server error"})
    }
}

module.exports = {createUser};
const { response } = require('express');
const User = require('../models/user-model'); 
const { user } = require('../router/auth-router');
bcrypt = require('bcryptjs');

const home = async (req, res) => {
    try {
        res
        .status(200)
        .send("Welcome to my Project using Router!");
    } catch (error) {
        res.status(400).send({msg:"Page Not Found!..."});
    }
};

const register = async (req,res) => {
    try {
        console.log("Request.Body:", req.body);
         const { username, email, phone, password } = req.body;
        
         const userExist = await User.findOne({ email });

         if(userExist) {
            return res.status(400).json({ message:"Email Already Exists!..." });
         }      

        const userCreated = await User.create({ username, email, phone, password });

        res 
        .status(201)
        .json({
                msg : "Registration Succesful!...", 
                token: await userCreated.generateToken(), 
                userId: userCreated._id.toString(), 
            });
    } catch (error) {
        // res.status(500).json("Server Register Error...");   
        next(error);    
    }
    
};

const login = async (req,res) => {
    try {
       const {email,password} = req.body; 

       const userExist = await User.findOne({ email });

       if(!userExist){
        return res.status(500).json({ message:"Invalid Credetial!" });
       }

       const user =  await userExist.comparePassword(password);

       if(user){
        res 
        .status(200)
        .json({
                msg : "Login Succesful!...", 
                token: await userExist.generateToken(), 
                userId: userExist._id.toString(), 
            });
       }else{
        res.status(401).json({message:"Invalid Email or Password!..."})
       }

    } catch (error) {
        res.status(500).json("Server Login Error..."); 
    }
};

const newuser = async (req, res) => {
    try {
      const userData = req.user;
      console.log(userData);
      return res.status(200).json({ userData });
    } catch (error) {
      console.log(`Error from User Route ${error}`);
    }
  };

module.exports = { home , register , login , newuser };
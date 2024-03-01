const Register  = require('../models/auth/Registeration')
const bcrypt = require('bcrypt')



const RegisterUser = async (req,res)=>{

    const {username,email,password} = req.body
    if(!username || !email || !password){
        return res.status(400).json({message:"all fields are required"})
    }
    const hash = bcrypt.hashSync(password, 5);
    if(!hash){
        return res.status(400).json({message:"something went wrong"})
    }
    const newUser = new Register({
        username:username,
        email:email,
        password:hash
    })
    try{
        const result = await newUser.save()
        res.status(201).send(result)
        console.log(result)
    }catch(error){
        res.status(400).json(error)
    }
}


const LoginUsers = async (req,res)=>{
    
    const {email,password} = req.body
    if(!email ||!password){
        return res.status(400).send({message:"all fields are required"})
    }
    const user = await Register.findOne({email})
    if(!user){
        return res.status(400).send({message:"user not found"})
    }
    const pwdMatch = bcrypt.compareSync(password,user.password)
    if(!pwdMatch){
        return res.status(400).send({message:"wrong password"})
    }
    res.status(200).send(user)

}


const getData = async (req, res) => {
  
try {
    const users = await Register.find()
    if(!users){
        return res.status(400).json({message:"There are no users"})
    }
    res.status(200).json(users)
} catch (error) {
    console.log("Error",error)
}
     
}


const Resetpwd = async (req, res) => {
    
}

module.exports = {RegisterUser,LoginUsers,getData}
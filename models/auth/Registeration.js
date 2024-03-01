const mongoose = require('mongoose')

const registerSchma = mongoose.Schema({

    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
},{timestapms:true})

const Register = mongoose.model('Register', registerSchma)

module.exports = Register
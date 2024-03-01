const express = require('express');
const {RegisterUser,LoginUsers,getData} = require('../controllers/authantications')




const router = express.Router()


router.post("/register",RegisterUser)
router.post("/login",LoginUsers)
router.get("/users",getData)

module.exports = router
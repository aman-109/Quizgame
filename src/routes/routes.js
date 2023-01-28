const express=require("express")
const { userDetails, quizScore } = require("../controller/user.controller")

const router=express.Router()


router
.post("/",userDetails)
.post("/updatescore/:id",quizScore)


module.exports=router
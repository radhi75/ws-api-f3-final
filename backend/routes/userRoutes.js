const express=require("express")
const {Getuser, Deleteuser, Edituser, Getone, Register, Login } = require("../controlles/userControlles")
const { registervalidation, validation, loginvalidation } = require("../middleware/validator")
const { isAuth } = require("../middleware/isAuth")
const userRoutes=express.Router()


userRoutes.post("/register",registervalidation,validation,Register)
userRoutes.post("/login",loginvalidation,validation,Login)
userRoutes.get("/current",isAuth,(req,res)=>{
    res.send({ user: req.user })
})
userRoutes.get("/",Getuser)
userRoutes.delete("/:id",Deleteuser)
userRoutes.put("/edit/:id",Edituser)
userRoutes.post("/filter",Getone)
module.exports=userRoutes
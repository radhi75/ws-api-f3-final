const mongoose=require("mongoose")

const connectDb=async()=>{
 try {
    await mongoose.connect("mongodb+srv://dadiaissa75:radhi123@cluster0.zi8emso.mongodb.net/")
    console.log("db is connected")
 } catch (error) {
    console.log("db is not connected")
 }
}
module.exports=connectDb
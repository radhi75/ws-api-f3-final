const userSchema = require("../models/user");
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
exports.Register=async(req,res)=>{
  const {email,pass}=req.body
  try {
    const found=await userSchema.findOne({email})
    if(found){
      res.status(400).send({errors:[{msg:'email already exists'}]})
    }else{
      const user = new userSchema(req.body);
      const salt=10
      const hashpass= await bcrypt.hash(pass,salt)
      user.pass=hashpass
      var session=utils.RandomString(32)

      const payload={id:user._id}
      const token = jwt.sign(payload,"hello")
      await user.save();
      res.status(200).send({ msg: "user added", user,token });
    }
  } catch (error) {
    res.status(500).send(error);
  }
}
exports.Login=async(req,res)=>{
  const {email,pass}=req.body
  try {
    const user=await userSchema.findOne({email})
    if(!user){
      res.status(400).send({errors:[{msg:'email does not exists'}]})
    }else{
      const match=bcrypt.compareSync(pass,user.pass)
      if(!match){
        res.status(400).send({errors:[{msg:'wrong password'}]})
      }else{
        const payload={id:user._id}
        const token = jwt.sign(payload,"hello")
        res.status(200).send({msg:"logging with success",user,token})
      }
    }
  } catch (error) {
    res.status(500).send(error)
  }
}


exports.Getuser = async (req, res) => {
  try {
    const user = await userSchema.find();
    res.status(200).send({ msg: "list of users", user });
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.Deleteuser = async (req, res) => {
  try {
    await userSchema.findByIdAndDelete(req.params.id);
    res.status(200).send("user deleted");
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.Edituser = async (req, res) => {
  try {
    const user = await userSchema.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    },{new:true});
    res.status(200).send({msg:"user updated",user})
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.Getone=async(req,res)=>{
    const {name}=req.body
    try {
        const user= await userSchema.find({name})
        res.status(200).send({msg:"filter",user})
    } catch (error) {
        res.status(500).send(error);
    }
}
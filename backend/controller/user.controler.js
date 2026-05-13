
import User from"../models/usermodel.js";
import bcrypt from 'bcrypt';
import Profile from "../models/profilemodel.js";

export const register= async ( req, res )=>{

    try{
        const {name, email,password, username }=req.body;

        if (!name|| !email || !password||!username) return res.status(400).json({message:"all fields are required"});

        const user =await User.findOne({
            email
        });
        if (user)return res.status (400).json({message:"user alrady exist"});
   
        const  hashedPassword=await bcrypt.hash(password, 10);
        const  newUser=new User({
            name,
            email,
            password:hashedPassword,
            username
        });
      await newUser.save();

      const profile=new Profile({userId:newUser._id  })

      return res.json({message:"User Created "});

    }catch(error){
        return res.status(500).json({message:error.message})
    }
   
}


export const login= async( req, res)=>{
    const { email,password}=req.body;
    console.log(req.body);

   

}
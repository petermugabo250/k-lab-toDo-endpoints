import clientModel from "../Model/clientModel";
import { uploadToCloud } from "../../helper/cloud";
import Jwt  from "jsonwebtoken";
import bcrypt, { genSalt, hash } from "bcrypt";
// create client

export const createClient = async(req,res)=>{
    try{
        const {firstname,lastname,email,password,gender,age,profile} = req.body;
        // validate empty field
  if(firstname =="" && lastname =="" && email =="" && password =="" && gender=="" && age =="")
  {
    return res.status(400).json({
      status: "400",
      message: "Fill all the field",
    });
  }
         //Validation functions
    const validateEmail = (email) => {
        // Basic email format validation
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
      };
      const validatePassword = (password) => {
        // Password requirements: at least 8 characters, at least one uppercase letter, one lowercase letter, one number, and one special character
        const passwordRegex =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
      };
  
      if (!email || !validateEmail(email)) {
        return res.status(400).json({
          status: "400",
          message: "Invalid email",
        });
      }
  
      if (!password || !validatePassword(password)) {
        return res.status(400).json({
          status: "400",
          message:
            "Password requirements: at least 8 characters, at least one uppercase letter, one lowercase letter, one number, and one special character, Example: Test@123",
        });
      }
      const userEmail = await clientModel.findOne({
        email: req.body.email,
      });
  
      if (userEmail) {
        return res.status(500).json({
          status: "500",
          message: "Email Already Exist",
          data:{userEmail}
        });
    }
    
        let image;
        if(req.file) image = await uploadToCloud(req.file,res);
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(password, salt);
        const createC = await clientModel.create({
            profile:
            image?.Secure_url,
            firstname,
            lastname,
            email,
            password:hashedPass,
            gender,
            age,
        })
        res.status(200).json({
            status:"200",
            message:"New created successful",
            data:createC,
        })
    }
    catch (error){
        return res.status(500).json({
            status:"500",
            message:"Failed to Register",
            error:error.message,
        })
    }
}
// update Clients
export const updateClient= async(req,res)=>{
  const {id}=req.params;
  try{
    const {firstname,lastname,email,password,gender,age,profile,role} = req.body;
            // validate empty field
  if(firstname =="" && lastname =="" && email =="" && password =="" && gender=="" && age =="")
  {
    return res.status(400).json({
      status: "400",
      message: "Fill all the field",
    });
  }
    const clientId = await clientModel.findById(id);
    if(!clientId)
    {
      return res.status(404).json({
        status:"404",
        message:"Id not found",})
    }
    let result;
    if (req.file) result = await uploadToCloud(req.file, res);
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);
    const updateC = await clientModel.findByIdAndUpdate(id, {
    profile:
        result?.secure_url ||
        "https://res.cloudinary.com/da12yf0am/image/upload/v1696850499/pbxwlozt1po8vtbwyabc.jpg",
        firstname,
        lastname,
        email,
        password: hashedPass,
        gender,
        age,
        role,
        
    });
    res.status(200).json({
      status:"200",
      message:"Clients Updated Successful",
      data:updateC,
  })
  }
  catch(error){
    return res.status(500).json({
      status:"500",
      message:"Failed to update Clients",
      error:error.message,
  })
  }
}
// View all clients
export const ViewClients = async(req,res)=>{
  try{
    const allClients = await clientModel.find();
  res.status(200).json({
    status:"200",
    message:"Viell all clients",
    data: allClients,
  })
  }
  catch(error){
    res.status(500).json({
      status:"500",
      message:"Failed to View Clints",
      error:error.message,
    })
  }
}

// Login 
export const Login = async(req,res)=>{
    try{
        const clientLogin = await clientModel.findOne(
            {email:req.body.email,}
        )
        if(!clientLogin)
        {
            return res.status(404).json({
                status:"404",
                message:"Clients not found",
            })  
        }
        const isMatch = await bcrypt.compare(req.body.password, clientLogin.password);
        if(!isMatch)
        {
            return res.status(404).json({
                status:"404",
                message:"Incorrect password",
            })  
        }
     
    const token = await Jwt.sign(
        { id: clientLogin._id },
        process.env.JWT_SECRET,
        { expiresIn: process.env.EXPIRED_DATE }
      );
        return res.status(200).json({
            status:"200",
            message:"Clients Login Successful",
            clientModel:clientLogin,
            toke: token,
        })  
    }
    catch(error){
        return res.status(500).json({
            status:"500",
            message:"Login Failed",
            error:error.message,
        })  
    }
}
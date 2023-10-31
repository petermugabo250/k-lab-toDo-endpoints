import mongoose from "mongoose";
export const clientSchema = mongoose.Schema({
    firstname:{
        type:String,
        require:true,
    },
    lastname:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },

    gender:{
        type:String,
        require:true,
    },
    age:{
        type:String,
        require:true,
    },
    profile:{
        type:String,
        require:true,
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
      },
   
});
export const clientModel = mongoose.model("clients",clientSchema);
export default clientModel;
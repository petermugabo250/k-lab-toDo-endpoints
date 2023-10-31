
import mongoose from "mongoose";
export const todoSchema = new mongoose.Schema({
Task:{type: String,
    require:true,
},
Duration:{
    type:String,
    require:true,
}

});
export const todoModel = mongoose.model("task",todoSchema);
export default todoModel;
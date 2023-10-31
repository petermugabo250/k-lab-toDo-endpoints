import mongoose from "mongoose";
// const {ObjectId}=mongoose.Schema;
export const productSchema = mongoose.Schema({
    productName:{
      type: String,
      require:true,
    },
    type:{
        type: String,
        require:true,
      },
      quantity:{
        type: String,
        require:true,
      },
      price:{
        type: String,
        require:true,
      },
      manufacturedDate:{
        type: String,
        require:true,
      },
      expiredDate:{
        type: String,
        require:true,
      },
      productImage:{
        type:String,
        require:true,
      },
      Owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"clients",
        require:true,
      }
});
export const productModel = mongoose.model("products",productSchema);
export default productModel;
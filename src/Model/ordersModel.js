import mongoose from "mongoose";
const {ObjectId}= mongoose.Schema;
export const ordersSchema = mongoose.Schema({
    ProductiD:{
        type:ObjectId,
        ref:"products",
        require:true,
    },
    Payer:{
        type:ObjectId,
        ref:"clients",
        require:true,
    },
   
});
export const OrderModel = mongoose.model("Ordrers",ordersSchema);
export default OrderModel;
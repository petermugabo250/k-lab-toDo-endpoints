import productModel from "../Model/productsModel";
import { uploadToCloud } from "../../helper/cloud";
// Create Products
export const createProduct = async(req,res)=>{
    try{
        const {productName,type,quantity,price,manufacturedDate,expiredDate,Owner,productImage}=req.body;
        
        let image;
        if(req.file) image = await uploadToCloud(req.file,res);
        const createP = await productModel.create({
            productImage:
            image?.Secure_url || "https://res.cloudinary.com/dvl09mzee/image/upload/v1698073813/lmh6ehlfvclssr5bru1p.jpg",
            productName,
            type,
            quantity,
            price,
            manufacturedDate,
            expiredDate,
          Owner: req.authenticatedUser.id,
        });
        
        return res.status(200).json({
           status:"200",
           message:"Products Created Succesfull",
           data:createP,
        });
        
    }
    
    catch (error){
        return res.status(500).json({
            status:"500",
            message:"Failed to create product",
            error:error.message,
        })
    }
}
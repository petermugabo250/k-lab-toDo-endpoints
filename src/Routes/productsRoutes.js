import express from "express";
import { createProduct } from "../controllers/productsController";
import fileUpload from "../../helper/multer";
import Authorization from "../middleware/Auntantication";
import userAuthorization from"../middleware/userAuntantication";
const productsRoutes = express.Router();
productsRoutes.post("/create",Authorization,fileUpload.single("productImage"),createProduct);
export default productsRoutes;
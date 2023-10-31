import express from"express";
import { 
    createClient,
    Login,
    updateClient,
    ViewClients
 } from "../controllers/clientsController";
import fileUpload from "../../helper/multer";
const clientRoute = express.Router();
clientRoute.post("/register",fileUpload.single("profile"),createClient);
clientRoute.put("/update/:id",fileUpload.single("profile"),updateClient);
clientRoute.post("/login",fileUpload.single("files"),Login);
clientRoute.get("/viewClients",ViewClients);
export default clientRoute;
import express from "express";
import { registerController, loginController } from "./dependencias";


export const userRoutes = express.Router();

userRoutes.post('/register',registerController.run.bind(registerController));
userRoutes.post('/login',loginController.run.bind(loginController));

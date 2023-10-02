import express from "express";
import {
    registerController,
    loginController,
    GetAllDisabledUsersController,
    deleteUserController,
    disabledUserController,
    getAllUsersController,
    getUserByIdController,
    upadateController,
    updateUserPasswordController,
} from './dependencias';

export const userRoutes = express.Router();


userRoutes.post('/register', registerController.run.bind(registerController));

userRoutes.post('/login', loginController.run.bind(loginController));

userRoutes.get('/disabledusers', GetAllDisabledUsersController.run.bind(GetAllDisabledUsersController));

userRoutes.delete('/users/:uuid', deleteUserController.run.bind(deleteUserController));

userRoutes.put('/users/:uuid/disable', disabledUserController.run.bind(deleteUserController));

userRoutes.get('/users', getAllUsersController.run.bind(getAllUsersController));

userRoutes.get('/users/:uuid', getUserByIdController.run.bind(getUserByIdController));

userRoutes.put('/users/:uuid', upadateController.run.bind(upadateController));

userRoutes.put('/users/:uuid/update-password', updateUserPasswordController.run.bind(updateUserPasswordController));
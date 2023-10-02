import { MysqlUserRepository } from "./mysqlUserRepository";
const mysqlUserRepository = new MysqlUserRepository();

import { RegisterController } from "./controller/registerController";
import { RegisterUseCase } from "../application/registerUseCase";

const registerUseCase = new RegisterUseCase(mysqlUserRepository);
const registerController = new RegisterController(registerUseCase);

import { allUsersDisabledUseCase } from "../application/allUsersDisabledUseCase";
import { allDisabledUsersController } from "./controller/allUsersDisabledController";

const AllUsersDisabledUseCase = new allUsersDisabledUseCase(mysqlUserRepository);
const GetAllDisabledUsersController = new allDisabledUsersController(AllUsersDisabledUseCase);


import { LoginUserUseCase } from "../application/loginUserUseCase";
import { LoginController } from "./controller/loginUserController";

const loginUserUseCase = new LoginUserUseCase(mysqlUserRepository);
const loginController = new LoginController(loginUserUseCase);

import { deleteUserUseCase } from "../application/deleteUserUseCase";
import { DeleteUserController } from "./controller/deleteUserController";

const DeleteUserUseCase = new deleteUserUseCase(mysqlUserRepository);
const deleteUserController = new DeleteUserController(DeleteUserUseCase);

import { DisableUserUseCase } from "../application/disableUserUseCase";
import { DisableUserController } from "./controller/disabledUserController";

const disableUserUseCase = new DisableUserUseCase(mysqlUserRepository);
const disabledUserController = new DisableUserController(disableUserUseCase);


import { GetAllUsersUseCase } from "../application/getAllUsersUseCase";
import { GetAllUsersController } from "./controller/getAllUsersController";

const getAllUsersUseCase = new GetAllUsersUseCase(mysqlUserRepository);
const getAllUsersController = new GetAllUsersController(getAllUsersUseCase);

import { GetByIdUseCase } from "../application/getByIdUseCase";
import { GetUserByIdController } from "./controller/getByIdController";

const getByIdUseCase = new GetByIdUseCase(mysqlUserRepository);
const getUserByIdController = new GetUserByIdController(getByIdUseCase);

import { UpdateUseCase } from "../application/updateUseCase";
import { UpadateController } from "./controller/updateController";

const updateUseCase = new UpdateUseCase(mysqlUserRepository);
const upadateController = new UpadateController(updateUseCase);

import { UpdatePasswordUseCase } from "../application/updatePasswordUseCase";
import { UpdateUserPasswordController } from "./controller/updatePassword";

const updatePasswordUseCase = new UpdatePasswordUseCase(mysqlUserRepository);
const updateUserPasswordController = new UpdateUserPasswordController(updatePasswordUseCase);

export {
    registerController,
    loginController,
    GetAllDisabledUsersController,
    deleteUserController,
    disabledUserController,
    getAllUsersController,
    getUserByIdController,
    upadateController,
    updateUserPasswordController,
};

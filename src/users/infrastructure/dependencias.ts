import { MysqlUserRepository } from "./mysqlUserRepository";
const mysqlUserRepository = new MysqlUserRepository();

import { RegisterController } from "./controller/registerController";
import { RegisterUseCase } from "../application/registerUseCase";

const registerUseCase = new RegisterUseCase(mysqlUserRepository);
const registerController = new RegisterController(registerUseCase);

import { AllUsersDisabledUseCase } from "../application/allUsersDisabledUseCase";
import { GetAllDisabledUsersController } from "./controller/allUsersDisabledController";

const allUsersDisabledUseCase = new AllUsersDisabledUseCase(mysqlUserRepository);
const getAllDisabledUsersController = new GetAllDisabledUsersController(allUsersDisabledUseCase);


import { LoginUserUseCase } from "../application/loginUserUseCase";
import { LoginController } from "./controller/loginUserController";

const loginUserUseCase = new LoginUserUseCase(mysqlUserRepository);
const loginController = new LoginController(loginUserUseCase);

import { DeleteUserUseCase } from "../application/deleteUserUseCase";
import { DeleteUserController } from "./controller/deleteUserController";

const deleteUserUseCase = new DeleteUserUseCase(mysqlUserRepository);
const deleteUserController = new DeleteUserController(deleteUserUseCase);

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
    getAllDisabledUsersController,
    deleteUserController,
    disabledUserController,
    getAllUsersController,
    getUserByIdController,
    upadateController,
    updateUserPasswordController,
};

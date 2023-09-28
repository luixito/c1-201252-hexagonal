import { Request, Response } from "express";
import { LoginUserUseCase } from "../../application/loginUserUseCase";

export class LoginController {
    constructor(private readonly LoginUserUseCase: LoginUserUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const { email, password } = req.body
            const loginResult = await this.LoginUserUseCase.run(email, password);

            if (loginResult) {
                return res.status(200).send({
                    status: "success",
                    data: loginResult,
                    message: "Inicio de sesión exitoso",
                });
            }

            return res.status(401).send({
                status: "error",
                data: null,
                message: "Contraseña o Email incorrectos",
            });
        } catch (error) {
            return res.status(500).send({
                status: "error",
                data: null,
                message: "Error al iniciar sesión",
            });
        }
    }
}

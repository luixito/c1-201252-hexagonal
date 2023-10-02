import { Request, Response } from "express";
import { UpdatePasswordUseCase } from "../../application/updatePasswordUseCase";

export class UpdateUserPasswordController {
    constructor(private readonly UpdatePasswordUseCase: UpdatePasswordUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const { uuid } = req.params;
            const { password } = req.body;

            const updatedUser = await this.UpdatePasswordUseCase.run(uuid, password);

            if (updatedUser) {
                return res.status(201).send({
                    status: "success",
                    data: {
                        updatedUser
                    },
                    message: "user update succefuly"
                });
            }

            res.status(400).send({
                status: "error",
                message: "Asegurese de llenar todos los datos"
            });
        } catch (error) {
            return res.status(500).send({
                status: "error",
                data: null,
                message: "Error al actualizar la contraseña del usuario",
            });
        }
    }
}

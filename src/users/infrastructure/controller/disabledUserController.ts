import { Request, Response } from "express";
import { DisableUserUseCase } from "../../application/disableUserUseCase";

export class DisableUserController {
    constructor(private readonly disableUserUseCase: DisableUserUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const { uuid } = req.params;
            const result = await this.disableUserUseCase.run(uuid);

            if (result) {
                return res.status(200).send({
                    status: "success",
                    data: null,
                    message: "Usuario inhabilitados exitosamente",
                });
            }

            return res.status(404).send({
                status: "error",
                data: null,
                message: "No se encontró el usuario con el UUID ingresado",
            });
        } catch (error) {
            return res.status(500).send({
                status: "error",
                data: null,
                message: "Error al inhabilitar el usuario",
            });
        }
    }
}

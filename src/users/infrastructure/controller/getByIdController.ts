import { Request, Response } from "express";
import { GetByIdUseCase } from "../../application/getByIdUseCase";

export class GetUserByIdController {
    constructor(private readonly GetByIdUseCase: GetByIdUseCase) { }

    async run(req: Request, res: Response) {
        try {
            const { uuid } = req.params;

            const user = await this.GetByIdUseCase.run(uuid);
            if (user) {
                return res.status(200).send({
                    status: "success",
                    data: user,
                    message: "Usuario recuperado exitosamente",
                });
            }

            return res.status(404).send({
                status: "error",
                message: "No se encontró el usuario con el UUID ingresado",
            });
        } catch (error) {
            return res.status(500).send({
                status: "error",
                data: null,
                message: "Error al recuperar el usuario",
            });
        }
    }
}

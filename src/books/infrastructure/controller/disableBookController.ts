import { Request, Response } from "express";
import { disableBookUseCase } from "../../application/disableBookUseCase";

export class DisableUserController {
    constructor(private readonly disableBookUseCase: disableBookUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const { uuid } = req.params;
            const result = await this.disableBookUseCase.run(uuid);

            if (result) {
                return res.status(200).send({
                    status: "success",
                    data: null,
                    message: "Libro inhabilitados exitosamente",
                });
            }

            return res.status(404).send({
                status: "error",
                data: null,
                message: "No se encontró el Libro con el UUID ingresado",
            });
        } catch (error) {
            return res.status(500).send({
                status: "error",
                data: null,
                message: "Error al inhabilitar el Libro",
            });
        }
    }
}
import { Request, Response } from "express";
import { getBookByIdUseCase } from "../../application/getBookByIdUseCase";

export class getBookByIdController {
    constructor(private readonly getBookByIdUseCase: getBookByIdUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const { uuid } = req.params;
            const result = await this.getBookByIdUseCase.run(uuid);

            if (result) {
                return res.status(200).send({
                    status: "success",
                    data: result,
                    message: "Libro encontrado exitosamente",
                });
            }

            return res.status(404).send({
                status: "error",
                message: "No se encontró el Libro con el UUID ingresado",
            });
        } catch (error) {
            return res.status(500).send({
                status: "error",
                message: "Error al inhabilitar el Libro",
            });
        }
    }
}
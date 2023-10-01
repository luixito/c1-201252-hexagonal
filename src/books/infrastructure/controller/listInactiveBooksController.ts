import { Request, Response } from "express";
import { listInactiveBooksUseCase } from "../../application/listInactiveBooksUsecase";

export class listInactiveBookController {
    constructor(private readonly listInactiveBooksUseCase: listInactiveBooksUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const result = await this.listInactiveBooksUseCase.run();

            if (result) {
                return res.status(200).send({
                    status: "success",
                    data: result,
                    message: "Libros encontrado exitosamente",
                });
            }

            return res.status(404).send({
                status: "error",
                data: null,
                message: "No se encontró libros",
            });
        } catch (error) {
            return res.status(500).send({
                status: "error",
                data: null,
                message: "Error buscar libros",
            });
        }
    }
}
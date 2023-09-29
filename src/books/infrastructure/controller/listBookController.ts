import { Request, Response } from "express";
import { listBooksUseCase } from "../../application/listBooksUseCase";

export class listBookController {
    constructor(private readonly listBooksUseCase: listBooksUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const result = await this.listBooksUseCase.run();

            if (result) {
                return res.status(200).send({
                    status: "success",
                    data: null,
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
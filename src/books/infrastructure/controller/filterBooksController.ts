import { Request, Response } from "express";
import { filterBooksUseCase } from "../../application/filterBooksUseCase";

export class filterBooksController {
    constructor(private readonly filterBooksUseCase: filterBooksUseCase) { }

    async run(req: Request, res: Response) {
        try {
            const { uuid, title, author, uniteCode } = req.params;
            const result = await this.filterBooksUseCase.run(uuid, title, author, uniteCode);
            if (result) {
                return res.status(200).send({
                    status: "success",
                    data: result,
                    message: "Libro encontrado exitosamente",
                });
            }

            return res.status(404).send({
                status: "error",
                message: "No se encontraron libros con los filtros seleccionados",
            });
        } catch (error) {
            return res.status(500).send({
                status: "error",
                message: "Error al buscar",
            });
        }
    }
}
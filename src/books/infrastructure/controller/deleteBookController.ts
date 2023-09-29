import { Request, Response } from "express";
import { deleteBookUseCase } from "../../application/deleteBookUseCase";

export class deleteBookController {

    constructor(readonly deleteBookUseCase : deleteBookUseCase ) { }

    async run(req: Request, res: Response) {
        try {
            let {
                uuid
            } = req.params

            let deletedBook = await this.deleteBookUseCase.run(uuid)

            if (deletedBook) {
                return res.status(200).send({
                    status: "success",
                    data: {
                        id: deletedBook,
                    },
                    message: "book delete succefuly",
                });
            }

            return res.status(404).send({
                status: "error",
                data: [],
                message: "No se encontró el book con el UUID ingresado",
            });
        } catch (error) {
            console.error("Error deleting book:", error);
            return res.status(500).send({
                status: "error",
                data: [],
                message: "Error al eliminar el book",
            });
        }
    }

}
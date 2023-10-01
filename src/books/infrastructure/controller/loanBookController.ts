import { Request, Response } from "express";
import { LoanBookUseCase } from "../../application/loanBookUseCase";

export class loanBookController {

    constructor(readonly LoanBookUseCase: LoanBookUseCase) { }

    async run(req: Request, res: Response) {
        try {
            let {
                uuid
            } = req.params

            let {
                loan,
            } = req.body

            let loanBook = await this.LoanBookUseCase.run(uuid, loan)
            if (loanBook) {
                return res.status(200).send({
                    status: "success",
                    data: loanBook,
                    message: "Libro prestado/recuperado exitosamente",
                });
            }

            return res.status(404).send({
                status: "error",
                message: "No se encontró el Libro con el UUID ingresado",
            });
        } catch (error) {
            console.error("Error deleting book:", error);
            return res.status(500).send({
                status: "error",
                data: [],
                message: "Error al prestar el book",
            });
        }
    }

}
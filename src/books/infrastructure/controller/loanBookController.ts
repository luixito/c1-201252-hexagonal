import { Request, Response } from "express";
import { LoanBookUseCase } from "../../application/loanBookUseCase";

export class loanBookController {

    constructor(readonly LoanBookUseCase : LoanBookUseCase ) { }

    async run(req: Request, res: Response) {
        try {
            let {
                uuid,
                loan,
            } = req.body

            let deletedBook = await this.LoanBookUseCase.run(uuid, loan)

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
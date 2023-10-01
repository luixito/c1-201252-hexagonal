import { Request, Response } from "express";
import { AddBookUseCase } from "../../application/addBookUseCase";
import { v4 as uuid } from "uuid";

export class addBookController {

    constructor(readonly addBookController: AddBookUseCase) { }

    async run(req: Request, res: Response) {
        try {
            let {
                title, author, description, uniteCode,
            } = req.body

            const newUuid: string = uuid()
            const status = "1"
            const loan = "1"

            let createdBook = await this.addBookController.run(
                newUuid,
                title,
                author,
                description,
                uniteCode,
                loan,
                status
            )

            if (createdBook) {
                return res.status(201).send({
                    status: "success",
                    data: {
                        createdBook
                    },
                    message: "Book created succefuly"
                });
            }

            res.status(400).send({
                status: "error",
                message: "Asegurese de llenar todos los datos"
            });
        } catch (error) {
            console.error("Error addBook:", error);
            return res.status(500).send({
                status: "error",
                data: [],
                message: "Error al agregar book",
            });
        }
    }

}
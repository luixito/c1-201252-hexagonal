import { Request, Response } from "express";
import { updateBookUseCase } from "../../application/updateBookUseCase";

export class updateBookController {

    constructor(readonly updateBookUseCase: updateBookUseCase) { }

    async run(req: Request, res: Response) {
        try {

            let {
                uuid,
            } = req.params
            let {
                title,
                author,
                description,
            } = req.body

            let updatedUser = await this.updateBookUseCase.run(
                uuid,
                title,
                author,
                description
            )

            if (updatedUser) {
                return res.status(201).send({
                    status: "success",
                    data: {
                        id: updatedUser.uuid,
                        title: updatedUser.title,
                        author: updatedUser.author,
                        description: updatedUser.description
                    },
                    message: "El Libro ha sido actualizado correctamentew"
                });
            }

            res.status(400).send({
                status: "error",
                message: "Error al actualizar el libro"
            });
        } catch (error) {
            return null;
        }
    }

}
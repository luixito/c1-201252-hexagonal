import { Request, Response } from "express";
import { UpdateUseCase } from "../../application/updateUseCase";
import { v4 as uuid } from "uuid";

export class UpadateController {

    constructor(readonly UpdateUseCase: UpdateUseCase) { }

    async run(req: Request, res: Response) {
        try {

            let {
                name,
                lastName,
                tel,
                email,
            } = req.body

            let updatedUser = await this.UpdateUseCase.run(
                name,
                lastName,
                email,
                tel,
            )

            if (updatedUser) {
                return res.status(201).send({
                    status: "success",
                    data: {
                       updatedUser
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
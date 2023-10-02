import { Request, Response } from "express";
import { deleteUserUseCase } from "../../application/deleteUserUseCase";

export class DeleteUserController {
    constructor(private readonly deleteUserUseCase: deleteUserUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const { uuid } = req.params;

            const deletedUserId = await this.deleteUserUseCase.run(uuid);

            if (deletedUserId === null) { 
                return res.status(404).send({
                    status: "error",
                    data: [],
                    message: "No se encontró la review con el UUID ingresado",
                });
            }

            return res.status(200).send({
                    status: "success",
                    message: "book delete succefuly",
                });
        } catch (error) {
            console.error("Error deleting user:", error);
            return res.status(500).send({
                status: "error",
                data: [],
                message: "Error al eliminar el usuario",
            });
        }
    }
}

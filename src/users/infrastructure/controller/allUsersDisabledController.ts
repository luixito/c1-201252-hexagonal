import { Request, Response } from "express";
import { allUsersDisabledUseCase } from "../../application/allUsersDisabledUseCase"; 

export class allDisabledUsersController {
    constructor(private readonly allUsersDisabledUseCase: allUsersDisabledUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const disabledUsers = await this.allUsersDisabledUseCase.run();

            if (disabledUsers) {
                return res.status(200).send({
                    status: "success",
                    data: disabledUsers,
                    message: "usuarios desactivados encontrados",
                });
            }

            return res.status(404).send({
                status: "error",
                message: "No se encontró libros",
            });
        } catch (error) {
            return res.status(500).send({
                status: "error",
                message: "Error al recuperar usuarios inhabilitados",
            });
        }
    }
}

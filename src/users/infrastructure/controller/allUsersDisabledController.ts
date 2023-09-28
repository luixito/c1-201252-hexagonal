import { Request, Response } from "express";
import { allUsersDisabledUseCase } from "../../application/allUsersDisabledUseCase"; 

export class GetAllDisabledUsersController {
    constructor(private readonly allUsersDisabledUseCase: allUsersDisabledUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const disabledUsers = await this.allUsersDisabledUseCase.run();

            if (disabledUsers) {
                return res.status(200).send({
                    status: "success",
                    data: disabledUsers,
                    message: "Usuarios inhabilitados recuperados",
                });
            }

            return res.status(404).send({
                status: "error",
                data: null,
                message: "No se encontraron usuarios inhabilitados",
            });
        } catch (error) {
            return res.status(500).send({
                status: "error",
                data: null,
                message: "Error al recuperar usuarios inhabilitados",
            });
        }
    }
}

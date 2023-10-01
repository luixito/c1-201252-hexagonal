import { Request, Response } from "express";
import { filterUserReviewUseCase } from "../../aplicattion/filterUserReviewUseCase";
import { v4 as uuid } from "uuid";

export class filterUserController {

    constructor(readonly filterUserReviewUseCase: filterUserReviewUseCase) { }

    async run(req: Request, res: Response) {
        try {
            let {
                userId
            } = req.params

            if (!userId) {
                return null
            }

            let result = await this.filterUserReviewUseCase.run(userId)

            if (result) {
                return res.status(200).send({
                    status: "success",
                    data: {
                        review: result
                    }
                });
            } else {
                return res.status(404).send({
                    status: "error",
                    data: [],
                    message: "No se encontraron reseñas para el usuario especificado",
                });
            }
            
        } catch (error) {
            console.error("Error:", error);
            return res.status(500).send({
                status: "error",
                data: [],
                message: "Error al recuperar las reseñas",
            });
        }
    }

}
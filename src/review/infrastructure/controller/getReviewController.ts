import { Request, Response } from "express";
import { getReviewUseCase } from "../../aplicattion/getReviewUseCase";

export class getReviewController {

    constructor(readonly getReviewUseCase: getReviewUseCase) { }

    async run(req: Request, res: Response) {
        try {
            let {
                uuid
            } = req.params

            const reviews = await this.getReviewUseCase.run(uuid);

            if (reviews) {
                return res.status(200).send({
                    status: "success",
                    data: {
                        reviews: reviews
                    }
                });
            } else {
                return res.status(404).send({
                    status: "error",
                    data: [],
                    message: "No se encontraron reseña para ese uuid",
                });
            }
        } catch (error) {
            console.error("Error:", error);
            return res.status(500).send({
                status: "error",
                data: [],
                message: "Error al obtener reseña para ese uuid",
            });
        }
    }
}

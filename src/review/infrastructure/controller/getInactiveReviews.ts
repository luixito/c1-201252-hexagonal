import { Request, Response } from "express";
import { getInactiveReviewUseCase } from "../../aplicattion/getInactiveReviewUsecase";

export class getInactiveReviewController {

    constructor(readonly getInactiveReviewUseCase: getInactiveReviewUseCase) { }

    async run(req: Request, res: Response) {
        try {
            const inactiveReviews = await this.getInactiveReviewUseCase.run();

            if (inactiveReviews) {
                return res.status(200).send({
                    status: "success",
                    data: {
                        reviews: inactiveReviews
                    }
                });
            } else {
                return res.status(404).send({
                    status: "error",
                    data: [],
                    message: "No se encontraron reseñas inactivas",
                });
            }
        } catch (error) {
            console.error("Error:", error);
            return res.status(500).send({
                status: "error",
                data: [],
                message: "Error al obtener reseñas inactivas",
            });
        }
    }
}

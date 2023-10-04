import { Request, Response } from "express";
import { updateReviewUseCase } from "../../aplicattion/updateReviewUseCase";

export class updateReviewController {
    constructor(private readonly updateReviewUseCase: updateReviewUseCase) { }

    async run(req: Request, res: Response) {
        try {
            const { uuid } = req.params;
            const { userId, text } = req.body;

            if (!uuid || !text) {
                return res.status(400).json({
                    status: "error",
                    message: "falta algun campo",
                });
            }

            const updatedReview = await this.updateReviewUseCase.run(uuid, userId, text);

            if (updatedReview) {
                return res.status(200).json({
                    status: "success",
                    data: {
                        review: updatedReview,
                    },
                });
            }
            return res.status(404).json({
                status: "error",
                message: "No se encontro review",
            });

        } catch (error) {
            console.error("Error al actualizar la review:", error);
            return res.status(500).json({
                status: "error",
                message: "Error al actualizar la review",
            });
        }
    }
}

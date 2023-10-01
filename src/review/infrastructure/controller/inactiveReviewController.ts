import { Request, Response } from "express";
import { inactivedReviewUseCase } from "../../aplicattion/inactivedReviewUseCase";

export class inactivateReviewController {

    constructor(readonly inactivedReviewUseCase: inactivedReviewUseCase) { }

    async run(req: Request, res: Response) {
        try {
            const { uuid } = req.params;

            if (!uuid) {
                return res.status(400).json({
                    status: "error",
                    message: "Se requiere un UUID.",
                });
            }

            const result = await this.inactivedReviewUseCase.run(uuid);

            if (result) {
                return res.status(200).send({
                    status: "success",
                    message:"reseña descativada"
                });
            } else {
                return res.status(404).send({
                    status: "error",
                    data: [],
                    message: "No se encontraron reseña para el uuid",
                });
            }
        } catch (error) {
            console.error("Error:", error);
            return res.status(500).json({
                status: "error",
                message: "Error al procesar la solicitud.",
            });
        }
    }
}

import { Request, Response } from "express";
import { deleteReviewUseCase } from "../../aplicattion/deleteReviewUseCase";

export class deleteReviewController {

    constructor(readonly deleteReviewUseCase: deleteReviewUseCase) { }

    async run(req: Request, res: Response) {
        try {
            let {
                uuid,
                userId
            } = req.body

            let deletedReview = await this.deleteReviewUseCase.run(uuid, userId)

            if (deletedReview === null) { 
                return res.status(404).send({
                    status: "error",
                    data: [],
                    message: "No se encontró la review con el UUID ingresado",
                });
            }

            return res.status(200).send({
                status: "success",
                data: {
                    review: deletedReview,
                },
                message: "review eliminada exitosamente",
            });
        } catch (error) {
            console.error("Error eliminando review:", error);
            return res.status(500).send({
                status: "error",
                data: [],
                message: "Error al eliminar la review",
            });
        }
    }

}

import { ReviewRepository } from "../domain/reviewRepository";

export class deleteReviewUseCase {
    constructor(readonly ReviewRepository: ReviewRepository) { }

    async run(
        uuid: string,
        userId: string,
    ): Promise<string | null> {
        try {
            const del = await this.ReviewRepository.deleteReview(uuid, userId);
            if (del === null) {
                return null;
            }

            return "delete";
        } catch (error) {
            return null;
        }
    }
}

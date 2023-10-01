import { Review } from "../domain/review";
import { ReviewRepository } from "../domain/reviewRepository";

export class updateReviewUseCase {
    constructor(readonly ReviewRepository: ReviewRepository) { }

    async run(
        uuid: string,
        userId: string,
        text: string
    ): Promise<Review | null | string> {
        try {
            const uptade = await this.ReviewRepository.updateReview(uuid, userId, text);

            return uptade;
        } catch (error) {
            return null;
        }
    }
}
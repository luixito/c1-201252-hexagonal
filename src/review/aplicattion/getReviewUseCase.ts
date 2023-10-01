import { Review } from "../domain/review";
import { ReviewRepository } from "../domain/reviewRepository";

export class getReviewUseCase{
    constructor(readonly ReviewRepository: ReviewRepository) { }

    async run(
        uuid: string,
    ): Promise<Review | null> {
        try {
            const review = await this.ReviewRepository.getReview(uuid);

            return review;
        } catch (error) {
            return null;
        }
    }
}
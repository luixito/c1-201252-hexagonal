import { Review } from "../domain/review";
import { ReviewRepository } from "../domain/reviewRepository";

export class getInactiveReviewUseCase {
    constructor(readonly ReviewRepository: ReviewRepository) { }

    async run(): Promise<Review | Review[] | null> {
        try {
            const getInactiveReview = await this.ReviewRepository.getInactiveReview();

            return getInactiveReview;
        } catch (error) {
            return null;
        }
    }
}
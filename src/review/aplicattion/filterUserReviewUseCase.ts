import { Review } from "../domain/review";
import { ReviewRepository } from "../domain/reviewRepository";

export class filterUserReviewUseCase {
    constructor(readonly ReviewRepository: ReviewRepository) { }

    async run(
        userId: string,
    ): Promise<Review[] | null> {
        try {
            const filterUserReview = await this.ReviewRepository.filterUserReview(userId);

            if (filterUserReview && filterUserReview.length > 0) {
                return filterUserReview;
            }
            

            return filterUserReview;
        } catch (error) {
            return null;
        }
    }
}
import { ReviewRepository } from "../domain/reviewRepository";

export class inactivedReviewUseCase {
    constructor(private readonly reviewRepository: ReviewRepository) { }

    async run(uuid: string): Promise<boolean> {
        try {
            const inactive = await this.reviewRepository.inactivedReview(uuid);
            if (inactive === "not_found") {
                return false
            }
            
            return true; 
        } catch (error) {
            return false;
        }
    }
}

// review.service.ts
import { Review } from '../entities/Review'; // Import your Review entity
import { AppDataSource } from '../utils/database';

export class ReviewService {
    private readonly reviewRepository = AppDataSource.getRepository(Review);

    async createReview(reviewData: Review): Promise<Review> {
        return this.reviewRepository.save(reviewData);
    }

    async getReviewById(id: number): Promise<Review | null> {
        return this.reviewRepository.findOneBy({id} as any);
    }

    async updateReview(id: number, updatedData: Partial<Review>): Promise<Review | null> {
        await this.reviewRepository.update(id, updatedData);
        return this.getReviewById(id);
    }

    async deleteReview(id: number): Promise<void> {
        await this.reviewRepository.delete(id);
    }
}
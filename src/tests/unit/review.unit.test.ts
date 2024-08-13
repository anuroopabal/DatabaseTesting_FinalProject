import { Review } from '../../entities/Review';
import { ReviewService } from '../../services/review.service';

describe('Review Service', () => {
  const reviewService = new ReviewService();

  it('should create a new review', async () => {
    const newReviewData: Partial<Review> = {
      book_id: 1,
      customer_id: 1,
      rating: 4.5,
      comment: 'Great read!',
    };

    const createdReview = await reviewService.createReview(newReviewData as Review);
    expect(createdReview).toBeDefined();
    expect(createdReview.rating).toBe(newReviewData.rating);
  });

  it('should retrieve a review by ID', async () => {
    const reviewId = 1; // Replace with an actual review ID
    const retrievedReview = await reviewService.getReviewById(reviewId);
    expect(retrievedReview).toBeDefined();
  });

  it('should update a review', async () => {
    const reviewId = 1; // Replace with an actual review ID
    const updates: Partial<Review> = { rating: 5.0 };
    const updatedReview = await reviewService.updateReview(reviewId, updates);
    expect(updatedReview).toBeDefined();
    expect(updatedReview?.rating).toBe(updates.rating);
  });

  it('should delete a review', async () => {
    const reviewId = 1; // Replace with an actual review ID
    await reviewService.deleteReview(reviewId);
    const deletedReview = await reviewService.getReviewById(reviewId);
    expect(deletedReview).toBeUndefined();
  });
});
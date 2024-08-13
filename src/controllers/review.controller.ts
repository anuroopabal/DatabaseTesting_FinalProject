// review.controller.ts
import { Request, Response } from 'express';
import { ReviewService } from '../services/review.service'; // Import your ReviewService
import { Review } from '../entities/Review'; // Import your Review entity

export class ReviewController {
    private readonly reviewService: ReviewService;

    constructor() {
        this.reviewService = new ReviewService(); // Initialize your ReviewService
    }

    async createReview(req: Request, res: Response): Promise<void> {
        try {
            const reviewData: Review = req.body; // Assuming data is sent in the request body
            const createdReview = await this.reviewService.createReview(reviewData);
            res.status(201).json(createdReview);
        } catch (error) {
            res.status(500).json({ error: 'Error creating review' });
        }
    }

    async getReview(req: Request, res: Response): Promise<void> {
        try {
            const reviewId: number = parseInt(req.params.reviewId, 10);
            const review = await this.reviewService.getReviewById(reviewId);
            if (review) {
                res.status(200).json(review);
            } else {
                res.status(404).json({ message: 'Review not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Error fetching review' });
        }
    }

    async updateReview(req: Request, res: Response): Promise<void> {
        try {
            const reviewId: number = parseInt(req.params.reviewId, 10);
            const updatedData: Partial<Review> = req.body; // Assuming partial data for update
            const updatedReview = await this.reviewService.updateReview(reviewId, updatedData);
            if (updatedReview) {
                res.status(200).json(updatedReview);
            } else {
                res.status(404).json({ message: 'Review not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Error updating review' });
        }
    }

    async deleteReview(req: Request, res: Response): Promise<void> {
        try {
            const reviewId: number = parseInt(req.params.reviewId, 10);
            await this.reviewService.deleteReview(reviewId);
            res.status(204).send(); // No content (successful deletion)
        } catch (error) {
            res.status(500).json({ error: 'Error deleting review' });
        }
    }
}
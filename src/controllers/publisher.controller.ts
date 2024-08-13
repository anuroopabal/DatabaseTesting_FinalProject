// publisher.controller.ts
import { Request, Response } from 'express';
import { PublisherService } from '../services/publisher.service'; // Import your PublisherService
import { Publisher } from '../entities/Publisher'; // Import your Publisher entity

export class PublisherController {
    private readonly publisherService: PublisherService;

    constructor() {
        this.publisherService = new PublisherService(); // Initialize your PublisherService
    }

    async createPublisher(req: Request, res: Response): Promise<void> {
        try {
            const publisherData: Publisher = req.body; // Assuming data is sent in the request body
            const createdPublisher = await this.publisherService.createPublisher(publisherData);
            res.status(201).json(createdPublisher);
        } catch (error) {
            res.status(500).json({ error: 'Error creating publisher' });
        }
    }

    async getPublisher(req: Request, res: Response): Promise<void> {
        try {
            const publisherId: number = parseInt(req.params.publisherId, 10);
            const publisher = await this.publisherService.getPublisherById(publisherId);
            if (publisher) {
                res.status(200).json(publisher);
            } else {
                res.status(404).json({ message: 'Publisher not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Error fetching publisher' });
        }
    }

    async updatePublisher(req: Request, res: Response): Promise<void> {
        try {
            const publisherId: number = parseInt(req.params.publisherId, 10);
            const updatedData: Partial<Publisher> = req.body; // Assuming partial data for update
            const updatedPublisher = await this.publisherService.updatePublisher(publisherId, updatedData);
            if (updatedPublisher) {
                res.status(200).json(updatedPublisher);
            } else {
                res.status(404).json({ message: 'Publisher not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Error updating publisher' });
        }
    }

    async deletePublisher(req: Request, res: Response): Promise<void> {
        try {
            const publisherId: number = parseInt(req.params.publisherId, 10);
            await this.publisherService.deletePublisher(publisherId);
            res.status(204).send(); // No content (successful deletion)
        } catch (error) {
            res.status(500).json({ error: 'Error deleting publisher' });
        }
    }
}
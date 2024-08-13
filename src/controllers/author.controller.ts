import { Request, Response } from 'express';
import { AuthorService } from '../services/author.service'; // Import your AuthorService
import { Author } from '../entities/Author'; // Import your Author entity

export class AuthorController {
    private readonly authorService: AuthorService;

    constructor() {
        this.authorService = new AuthorService(); // Initialize your AuthorService
    }

    async createAuthor(req: Request, res: Response): Promise<void> {
        try {
            const authorData: Author = req.body; // Assuming data is sent in the request body
            const createdAuthor = await this.authorService.createAuthor(authorData);
            res.status(201).json(createdAuthor);
        } catch (error) {
            res.status(500).json({ error: 'Error creating author' });
        }
    }

    async getAuthor(req: Request, res: Response): Promise<void> {
        try {
            const authorId: number = parseInt(req.params.authorId, 10);
            const author = await this.authorService.getAuthorById(authorId);
            if (author) {
                res.status(200).json(author);
            } else {
                res.status(404).json({ message: 'Author not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Error fetching author' });
        }
    }

    async updateAuthor(req: Request, res: Response): Promise<void> {
        try {
            const authorId: number = parseInt(req.params.authorId, 10);
            const updatedData: Partial<Author> = req.body; // Assuming partial data for update
            const updatedAuthor = await this.authorService.updateAuthor(authorId, updatedData);
            if (updatedAuthor) {
                res.status(200).json(updatedAuthor);
            } else {
                res.status(404).json({ message: 'Author not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Error updating author' });
        }
    }

    async deleteAuthor(req: Request, res: Response): Promise<void> {
        try {
            const authorId: number = parseInt(req.params.authorId, 10);
            await this.authorService.deleteAuthor(authorId);
            res.status(204).send(); // No content (successful deletion)
        } catch (error) {
            res.status(500).json({ error: 'Error deleting author' });
        }
    }
}
// book.controller.ts
import { Request, Response } from 'express';
import { BookService } from '../services/book.service'; // Import your BookService
import { Book } from '../entities/Book'; // Import your Book entity

export class BookController {
    private readonly bookService: BookService;

    constructor() {
        this.bookService = new BookService(); // Initialize your BookService
    }

    async createBook(req: Request, res: Response): Promise<void> {
        try {
            const bookData: Book = req.body; // Assuming data is sent in the request body
            const createdBook = await this.bookService.createBook(bookData);
            res.status(201).json(createdBook);
        } catch (error) {
            res.status(500).json({ error: 'Error creating book' });
        }
    }

    async getAllBooks(res: Response): Promise<void> {
        try {
            const books = await this.bookService.getAllBooks();
            res.status(200).json(books);
        } catch (error) {
            res.status(500).json({ error: 'Error fetching books' });
        }
    }

    async getBookById(req: Request, res: Response): Promise<void> {
        try {
            const bookId: number = parseInt(req.params.bookId, 10);
            const book = await this.bookService.getBookById(bookId);
            if (book) {
                res.status(200).json(book);
            } else {
                res.status(404).json({ message: 'Book not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Error fetching book' });
        }
    }

    async updateBook(req: Request, res: Response): Promise<void> {
        try {
            const bookId: number = parseInt(req.params.bookId, 10);
            const updatedData: Partial<Book> = req.body; // Assuming partial data for update
            const updatedBook = await this.bookService.updateBook(bookId, updatedData);
            if (updatedBook) {
                res.status(200).json(updatedBook);
            } else {
                res.status(404).json({ message: 'Book not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Error updating book' });
        }
    }

    async deleteBook(req: Request, res: Response): Promise<void> {
        try {
            const bookId: number = parseInt(req.params.bookId, 10);
            await this.bookService.deleteBook(bookId);
            res.status(204).send(); // No content (successful deletion)
        } catch (error) {
            res.status(500).json({ error: 'Error deleting book' });
        }
    }
}
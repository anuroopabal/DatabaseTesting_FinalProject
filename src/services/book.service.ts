// book.service.ts
import { Book } from '../entities/Book'; // Import your Book entity
import { AppDataSource } from '../utils/database';

export class BookService {
    private readonly bookRepository = AppDataSource.getRepository(Book);

    async createBook(bookData: Book): Promise<Book> {
        return this.bookRepository.save(bookData);
    }

    async getAllBooks(): Promise<Book[]> {
        return this.bookRepository.find();
    }

    async getBookById(id: number): Promise<Book | null> {
        return this.bookRepository.findOneBy({id} as any);
    }

    async updateBook(id: number, updatedData: Partial<Book>): Promise<Book | null> {
        await this.bookRepository.update(id, updatedData);
        return this.getBookById(id);
    }

    async deleteBook(id: number): Promise<void> {
        await this.bookRepository.delete(id);
    }
}
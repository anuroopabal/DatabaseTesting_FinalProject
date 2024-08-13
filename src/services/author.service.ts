// author.service.ts
import { Author } from '../entities/Author'; // Import your Author entity
import { AppDataSource } from '../utils/database';

export class AuthorService {
    private readonly authorRepository = AppDataSource.getRepository(Author);

    async createAuthor(authorData: Author): Promise<Author> {
        return this.authorRepository.save(authorData);
    }

    async getAuthorById(id: number): Promise<Author | null> {
    return this.authorRepository.findOneBy({id} as any);
    }

    async updateAuthor(id: number, updatedData: Partial<Author>): Promise<Author | null> {
        await this.authorRepository.update(id, updatedData);
        return this.getAuthorById(id);
    }

    async deleteAuthor(id: number): Promise<void> {
        await this.authorRepository.delete(id);
    }
}
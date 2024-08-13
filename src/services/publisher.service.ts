// publisher.service.ts
import { Publisher } from '../entities/Publisher'; // Import your Publisher entity
import { AppDataSource } from '../utils/database';


export class PublisherService {
    private readonly publisherRepository = AppDataSource.getRepository(Publisher);

    async createPublisher(publisherData: Publisher): Promise<Publisher> {
        return this.publisherRepository.save(publisherData);
    }

    async getPublisherById(id: number): Promise<Publisher | null> {
        return this.publisherRepository.findOneBy({id} as any);
    }

    async updatePublisher(id: number, updatedData: Partial<Publisher>): Promise<Publisher | null> {
        await this.publisherRepository.update(id, updatedData);
        return this.getPublisherById(id);
    }

    async deletePublisher(id: number): Promise<void> {
        await this.publisherRepository.delete(id);
    }
}
import { Publisher } from '../entities/Publisher';
import { PublisherService } from '../services/publisher.service';

describe('Publisher Service', () => {
  const publisherService = new PublisherService();

  it('should create a new publisher', async () => {
    const newPublisherData: Partial<Publisher> = {
      name: 'Publisher XYZ',
      city: 'New York',
      website: 'https://publisherxyz.com',
    };

    const createdPublisher = await publisherService.createPublisher(newPublisherData);
    expect(createdPublisher).toBeDefined();
    expect(createdPublisher.name).toBe(newPublisherData.name);
  });

  it('should retrieve a publisher by ID', async () => {
    const publisherId = 1; // Replace with an actual publisher ID
    const retrievedPublisher = await publisherService.getPublisherById(publisherId);
    expect(retrievedPublisher).toBeDefined();
  });

  it('should update a publisher', async () => {
    const publisherId = 1; // Replace with an actual publisher ID
    const updates: Partial<Publisher> = { city: 'Updated City' };
    const updatedPublisher = await publisherService.updatePublisher(publisherId, updates);
    expect(updatedPublisher).toBeDefined();
    expect(updatedPublisher.city).toBe(updates.city);
  });

  it('should delete a publisher', async () => {
    const publisherId = 1; // Replace with an actual publisher ID
    await publisherService.deletePublisher(publisherId);
    const deletedPublisher = await publisherService.getPublisherById(publisherId);
    expect(deletedPublisher).toBeUndefined();
  });
});
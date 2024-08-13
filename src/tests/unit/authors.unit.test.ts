import { Author } from '../../entities/Author';
import { AuthorService } from '../../services/author.service';

describe('Author Service', () => {
  const authorService = new AuthorService();

  it('should create a new author', async () => {
    const newAuthorData: Partial<Author> = {
      name: 'Jane Smith',
    };

    const createdAuthor = await authorService.createAuthor(newAuthorData as Author);
    expect(createdAuthor).toBeDefined();
    expect(createdAuthor.name).toBe(newAuthorData.name);
  });

  it('should retrieve an author by ID', async () => {
    const authorId = 1; // Replace with an actual author ID
    const retrievedAuthor = await authorService.getAuthorById(authorId);
    expect(retrievedAuthor).toBeDefined();
  });

   it('should delete an author', async () => {
    const authorId = 1; // Replace with an actual author ID
    await authorService.deleteAuthor(authorId);
    const deletedAuthor = await authorService.getAuthorById(authorId);
    expect(deletedAuthor).toBeUndefined();
  });
});
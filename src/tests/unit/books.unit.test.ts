import { Book } from '../../entities/Book';
import { BookService } from '../../services/book.service';

describe('Book Service', () => {
  const bookService = new BookService();

  it('should create a new book', async () => {
    const newBookData: Partial<Book> = {
      title: 'Sample Book',
      author_id: 1, // Replace with an actual author ID
      publisher_id: 1, // Replace with an actual publisher ID
    };

    const createdBook = await bookService.createBook(newBookData as Book);
    expect(createdBook).toBeDefined();
    expect(createdBook.title).toBe(newBookData.title);
  });

  it('should retrieve a book by ID', async () => {
    const bookId = 1; // Replace with an actual book ID
    const retrievedBook = await bookService.getBookById(bookId);
    expect(retrievedBook).toBeDefined();
  });

  it('should update a book', async () => {
    const bookId = 1; // Replace with an actual book ID
    const updates: Partial<Book> = { title: 'Updated Title' };
    const updatedBook = await bookService.updateBook(bookId, updates);
    expect(updatedBook).toBeDefined();
    expect(updatedBook?.title).toBe(updates.title);
  });

  it('should delete a book', async () => {
    const bookId = 1; // Replace with an actual book ID
    await bookService.deleteBook(bookId);
    const deletedBook = await bookService.getBookById(bookId);
    expect(deletedBook).toBeUndefined();
  });
});
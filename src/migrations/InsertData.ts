import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertData implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Insert sample data into authors
        await queryRunner.query(`
            INSERT INTO authors (name) VALUES
            ('Author One'),
            ('Author Two'),
            ('Author Three');
        `);

        // Insert sample data into publishers
        await queryRunner.query(`
            INSERT INTO publishers (name) VALUES
            ('Publisher One'),
            ('Publisher Two'),
            ('Publisher Three');
        `);

        // Insert sample data into books
        await queryRunner.query(`
            INSERT INTO books (title, genre, author_id, publisher_id, book_format, quantity, price) VALUES
            ('Book One', 'Fiction', 1, 1, 'Physical', 10, 19.99),
            ('Book Two', 'Non-Fiction', 2, 2, 'E-book', 20, 29.99),
            ('Book Three', 'Science Fiction', 3, 3, 'Audiobook', 30, 39.99);
        `);

        // Insert sample data into customers
        await queryRunner.query(`
            INSERT INTO customers (name, email, address, phone) VALUES
            ('Customer One', 'customer1@example.com', 'Address One', 1234567890),
            ('Customer Two', 'customer2@example.com', 'Address Two', 2345678901),
            ('Customer Three', 'customer3@example.com', 'Address Three', 3456789012);
        `);

        // Insert sample data into reviews
        await queryRunner.query(`
            INSERT INTO reviews (customer_id, book_id, rating, comment) VALUES
            ('1', '1', 4.5, 'Great book!'),
            ('2', '2', 3.5, 'Informative but lengthy.'),
            ('3', '3', 5.0, 'Amazing read!');
        `);

        // Insert sample data into sales
        await queryRunner.query(`
            INSERT INTO sales (customer_id, book_id, quantity) VALUES
            ('1', '1', 2),
            ('2', '2', 1),
            ('3', '3', 3);
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Remove sample data in reverse order
        await queryRunner.query(`DELETE FROM sales`);
        await queryRunner.query(`DELETE FROM reviews`);
        await queryRunner.query(`DELETE FROM books`);
        await queryRunner.query(`DELETE FROM publishers`);
        await queryRunner.query(`DELETE FROM authors`);
        await queryRunner.query(`DELETE FROM customers`);
    }
}
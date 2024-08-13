import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateTables implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Create customers table
        await queryRunner.createTable(new Table({
            name: 'customers',
            columns: [
                {name: 'customer_id', type: 'serial', isPrimary: true },
                { name: 'name', type: 'varchar', length: '100' },
                { name: 'email', type: 'varchar', length: '100', isUnique: true },
                { name: 'address', type: 'varchar', length: '200' },
                { name: 'phone', type: 'numeric', precision: 10, scale: 0, isUnique: true },
                { name: 'registration_date', type: 'date', default: 'CURRENT_DATE' }
            ]
        }), true);

        // Create authors table
        await queryRunner.createTable(new Table({
            name: 'authors',
            columns: [
                { name: 'author_id', type: 'serial', isPrimary: true },
                { name: 'name', type: 'varchar', length: '100', isUnique: true }
            ]
        }), true);

        // Create publishers table
        await queryRunner.createTable(new Table({
            name: 'publishers',
            columns: [
                { name: 'publisher_id', type: 'serial', isPrimary: true },
                { name: 'name', type: 'varchar', length: '100', isUnique: true }
            ]
        }), true);

        // Create books table
        await queryRunner.createTable(new Table({
            name: 'books',
            columns: [
                {name: 'book_id', type: 'serial', isPrimary: true },
                { name: 'title', type: 'varchar', length: '100' },
                { name: 'genre', type: 'varchar', length: '50' },
                { name: 'author_id', type: 'int' },
                { name: 'publisher_id', type: 'int' },
                { name: 'book_format', type: 'varchar', length: '20', enum: ['Physical', 'E-book', 'Audiobook'] },
                { name: 'quantity', type: 'int' },
                { name: 'price', type: 'decimal', precision: 10, scale: 2 }
            ],
            foreignKeys: [
                new TableForeignKey({
                    columnNames: ['author_id'],
                    referencedTableName: 'authors',
                    referencedColumnNames: ['author_id']
                }),
                new TableForeignKey({
                    columnNames: ['publisher_id'],
                    referencedTableName: 'publishers',
                    referencedColumnNames: ['publisher_id']
                })
            ]
        }), true);

        // Create reviews table
        await queryRunner.createTable(new Table({
            name: 'reviews',
            columns: [
                {name: 'review_id', type: 'serial', isPrimary: true },
                { name: 'customer_id', type: 'varchar', length: '50' },
                { name: 'book_id', type: 'varchar', length: '50' },
                { name: 'review_date', type: 'date', default: 'CURRENT_DATE' },
                { name: 'rating', type: 'decimal', precision: 10, scale: 2 },
                { name: 'comment', type: 'text', isNullable: true }
            ],
            foreignKeys: [
                new TableForeignKey({
                    columnNames: ['customer_id'],
                    referencedTableName: 'customers',
                    referencedColumnNames: ['customer_id']
                }),
                new TableForeignKey({
                    columnNames: ['book_id'],
                    referencedTableName: 'books',
                    referencedColumnNames: ['book_id']
                })
            ]
        }), true);

        // Create sales table
        await queryRunner.createTable(new Table({
            name: 'sales',
            columns: [
                { name: 'sale_id', type: 'serial', isPrimary: true },
                { name: 'customer_id', type: 'varchar', length: '50' },
                { name: 'book_id', type: 'varchar', length: '50' },
                { name: 'sale_date', type: 'date', default: 'CURRENT_DATE' },
                { name: 'quantity', type: 'int' }
            ],
            foreignKeys: [
                new TableForeignKey({
                    columnNames: ['customer_id'],
                    referencedTableName: 'customers',
                    referencedColumnNames: ['customer_id']
                }),
                new TableForeignKey({
                    columnNames: ['book_id'],
                    referencedTableName: 'books',
                    referencedColumnNames: ['book_id']
                })
            ]
        }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Drop tables in reverse order
        await queryRunner.dropTable('sales');
        await queryRunner.dropTable('reviews');
        await queryRunner.dropTable('books');
        await queryRunner.dropTable('publishers');
        await queryRunner.dropTable('authors');
        await queryRunner.dropTable('customers');
    }
}
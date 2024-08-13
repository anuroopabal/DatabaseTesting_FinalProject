import { DataSource } from 'typeorm';
import { Customer } from '../entities/Customer';
import { Author } from '../entities/Author';
import { Book } from '../entities/Book';
import { Review } from '../entities/Review';
import { Sale } from '../entities/Sale';
import { Publisher } from '../entities/Publisher';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_NAME || 'OnlineBookStoreDB',
    synchronize: true, // set to false in production
    logging: false,
    entities: [Customer, Author, Book, Review, Sale, Publisher],
    migrations: ['src/migrations/*.ts'],
    subscribers: [],
});

// Initialize the data source
AppDataSource.initialize()
    .then(() => {
        console.log('Data Source has been initialized!');
    })
    .catch((err) => {
        console.error('Error during Data Source initialization:', err);
    });
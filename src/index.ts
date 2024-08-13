import 'reflect-metadata'; // Required by TypeORM
import app from './app';
import { AppDataSource } from './utils/database';

const PORT = process.env.PORT || 3000;

// Start the server after the database is initialized
AppDataSource.initialize()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Error during Data Source initialization:', err);
    });
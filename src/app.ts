import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { CustomerController } from './controllers/customer.controller';
import { AuthorController } from './controllers/author.controller';
import { BookController } from './controllers/book.controller';
import { ReviewController } from './controllers/review.controller';
import { SaleController } from './controllers/sale.controller';
import { PublisherController } from './controllers/publisher.controller';

const app = express();

// Instantiate controllers
const customerController = new CustomerController();
const authorController = new AuthorController();
const bookController = new BookController();
const reviewController = new ReviewController();
const saleController = new SaleController();
const publisherController = new PublisherController();

// Middleware setup
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/customers', (req, res, next) => {
    if (req.method === 'POST') {
        customerController.createCustomer(req, res).catch(next);
    } else if (req.method === 'GET' && req.params.customerId) {
        customerController.getCustomer(req, res).catch(next);
    } else if (req.method === 'PUT' && req.params.customerId) {
        customerController.updateCustomer(req, res).catch(next);
    } else if (req.method === 'DELETE' && req.params.customerId) {
        customerController.deleteCustomer(req, res).catch(next);
    } else {
        res.status(405).send('Method Not Allowed');
    }
});

app.use('/api/authors', (req, res, next) => {
    if (req.method === 'POST') {
        authorController.createAuthor(req, res).catch(next);
    } else if (req.method === 'GET' && req.params.authorId) {
        authorController.getAuthor(req, res).catch(next);
    } else if (req.method === 'PUT' && req.params.authorId) {
        authorController.updateAuthor(req, res).catch(next);
    } else if (req.method === 'DELETE' && req.params.authorId) {
        authorController.deleteAuthor(req, res).catch(next);
    } else {
        res.status(405).send('Method Not Allowed');
    }
});

app.use('/api/books', (req, res, next) => {
    if (req.method === 'POST') {
        bookController.createBook(req, res).catch(next);
    } else if (req.method === 'GET' && req.params.bookId) {
        bookController.getBook(req, res).catch(next);
    } else if (req.method === 'PUT' && req.params.bookId) {
        bookController.updateBook(req, res).catch(next);
    } else if (req.method === 'DELETE' && req.params.bookId) {
        bookController.deleteBook(req, res).catch(next);
    } else {
        res.status(405).send('Method Not Allowed');
    }
});

app.use('/api/reviews', (req, res, next) => {
    if (req.method === 'POST') {
        reviewController.createReview(req, res).catch(next);
    } else if (req.method === 'GET' && req.params.reviewId) {
        reviewController.getReview(req, res).catch(next);
    } else if (req.method === 'PUT' && req.params.reviewId) {
        reviewController.updateReview(req, res).catch(next);
    } else if (req.method === 'DELETE' && req.params.reviewId) {
        reviewController.deleteReview(req, res).catch(next);
    } else {
        res.status(405).send('Method Not Allowed');
    }
});

app.use('/api/sales', (req, res, next) => {
    if (req.method === 'POST') {
        saleController.createSale(req, res).catch(next);
    } else if (req.method === 'GET' && req.params.saleId) {
        saleController.getSale(req, res).catch(next);
    } else if (req.method === 'PUT' && req.params.saleId) {
        saleController.updateSale(req, res).catch(next);
    } else if (req.method === 'DELETE' && req.params.saleId) {
        saleController.deleteSale(req, res).catch(next);
    } else {
        res.status(405).send('Method Not Allowed');
    }
});

app.use('/api/publishers', (req, res, next) => {
    if (req.method === 'POST') {
        publisherController.createPublisher(req, res).catch(next);
    } else if (req.method === 'GET' && req.params.publisherId) {
        publisherController.getPublisher(req, res).catch(next);
    } else if (req.method === 'PUT' && req.params.publisherId) {
        publisherController.updatePublisher(req, res).catch(next);
    } else if (req.method === 'DELETE' && req.params.publisherId) {
        publisherController.deletePublisher(req, res).catch(next);
    } else {
        res.status(405).send('Method Not Allowed');
    }
});

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

export default app;

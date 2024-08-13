// Review.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Book } from './Book';
import { Customer } from './Customer';

@Entity()
export class Review {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'date', default: () => 'CURRENT_DATE' })
    review_date: Date;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    rating: number;

    @Column({ type: 'text', nullable: true })
    comment: string | null;

    @Column({ nullable: true })
    customer_id: number;

    @Column({ nullable: true })
    book_id: number;

    @ManyToOne(() => Book, (book) => book.reviews)
    book: Book;

    @ManyToOne(() => Customer, (customer) => customer.reviews)
    customer: Customer;


    
}
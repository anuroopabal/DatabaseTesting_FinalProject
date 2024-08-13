// Sale.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Customer } from './Customer';
import { Book } from './Book';

@Entity()
export class Sale {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'date', default: () => 'CURRENT_DATE' })
    saledate: Date;

    @Column()
    quantity: number;

    @Column({ nullable: true })
    customer_id: number;

    @Column({ nullable: true })
    book_id: number;

    @ManyToOne(() => Customer, (customer) => customer.sales)
    customer: Customer;

    @ManyToOne(() => Book, (book) => book.sales)
    book: Book;
}
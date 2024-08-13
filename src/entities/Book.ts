// Book.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Author } from './Author';
import { Review } from './Review';
import { Sale } from './Sale';
import { Publisher } from './Publisher';

@Entity()
export class Book {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    genre: string;

    @Column({ type: 'varchar', length: 20 })
    book_format: 'Physical' | 'E-book' | 'Audiobook';

    @Column({ nullable: true })
    quantity: number;

    @Column({ nullable: true })
    author_id: number;

    @Column({ nullable: true })
    publisher_id: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    price: number;

    @ManyToOne(() => Author, (author) => author.books)
    author: Author;

    @ManyToOne(() => Publisher, (publisher) => publisher.books)
    publisher: Publisher;

    @OneToMany(() => Review, (review) => review.book)
    reviews: Review[];

    @OneToMany(() => Sale, (sale) => sale.book)
    sales: Sale[];
}
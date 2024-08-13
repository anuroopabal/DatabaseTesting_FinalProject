import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Sale } from './Sale';
import { Review } from './Review';

@Entity()
export class Customer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    address: string;

    @Column()
    phone: number;

    @Column({default: () => 'CURRENT_DATE'})
    registration_date: Date;

    @OneToMany(() => Review, (review) => review.customer)
    reviews: Review[];

    @OneToMany(() => Sale, (sale) => sale.customer)
    sales: Sale[];
}
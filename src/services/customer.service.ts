    // customer.service.ts
    import { Customer } from '../entities/Customer'; // Import your Customer entity
    import { AppDataSource } from '../utils/database';

    export class CustomerService {
        private readonly customerRepository = AppDataSource.getRepository(Customer);

        async createCustomer(customerData: Customer): Promise<Customer> {
            return this.customerRepository.save(customerData);
        }

        async getCustomerById(id: number): Promise<Customer | null> {
            return this.customerRepository.findOneBy({id} as any);
        }

        async updateCustomer(id: number, updatedData: Partial<Customer>): Promise<Customer | null> {
            await this.customerRepository.update(id, updatedData);
            return this.getCustomerById(id);
        }

        async deleteCustomer(id: number): Promise<void> {
            await this.customerRepository.delete(id);
        }
    }
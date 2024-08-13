import { Request, Response } from 'express';
import { CustomerService } from '../services/customer.service'; // Import your CustomerService
import { Customer } from '../entities/Customer'; // Import your Customer entity

export class CustomerController {
    private readonly customerService: CustomerService;

    constructor() {
        this.customerService = new CustomerService(); // Initialize your CustomerService
    }

    async createCustomer(req: Request, res: Response): Promise<void> {
        try {
            const customerData: Customer = req.body; // Assuming data is sent in the request body
            const createdCustomer = await this.customerService.createCustomer(customerData);
            res.status(201).json(createdCustomer);
        } catch (error) {
            res.status(500).json({ error: 'Error creating customer' });
        }
    }

    async getCustomer(req: Request, res: Response): Promise<void> {
        try {
            const customerId: number = parseInt(req.params.customerId, 10);
            const customer = await this.customerService.getCustomerById(customerId);
            if (customer) {
                res.status(200).json(customer);
            } else {
                res.status(404).json({ message: 'Customer not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Error fetching customer' });
        }
    }

    

    async updateCustomer(req: Request, res: Response): Promise<void> {
        try {
            const customerId: number = parseInt(req.params.customerId, 10);
            const updatedData: Partial<Customer> = req.body; // Assuming partial data for update
            const updatedCustomer = await this.customerService.updateCustomer(customerId, updatedData);
            if (updatedCustomer) {
                res.status(200).json(updatedCustomer);
            } else {
                res.status(404).json({ message: 'Customer not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Error updating customer' });
        }
    }

    async deleteCustomer(req: Request, res: Response): Promise<void> {
        try {
            const customerId: number = parseInt(req.params.customerId, 10);
            await this.customerService.deleteCustomer(customerId);
            res.status(204).send(); // No content (successful deletion)
        } catch (error) {
            res.status(500).json({ error: 'Error deleting customer' });
        }
    }
}
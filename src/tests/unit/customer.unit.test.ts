
import { Customer } from '../../entities/Customer';
import { CustomerService } from '../../services/customer.service';

describe('Customer Service', () => {
  const customerService = new CustomerService();

  it('should create a new customer', async () => {
    const newCustomerData: Partial<Customer> = {
      name: 'John Doe',
      email: 'john@example.com',
      address: '123 Main St',
      phone: 1234567890,
    };

    const createdCustomer = await customerService.createCustomer(newCustomerData as Customer);
    expect(createdCustomer).toBeDefined();
    expect(createdCustomer.name).toBe(newCustomerData.name);
  });

  it('should retrieve a customer by ID', async () => {
    const customerId = 1; // Replace with an actual customer ID
    const retrievedCustomer = await customerService.getCustomerById(customerId);
    expect(retrievedCustomer).toBeDefined();
  });

  it('should update a customer', async () => {
    const customerId = 1; 
    const updates: Partial<Customer> = { name: 'Updated Name' };
    const updatedCustomer = await customerService.updateCustomer(customerId, updates);
    expect(updatedCustomer).toBeDefined();
    if(!updatedCustomer){
      fail('Book not found');
    }
    expect(updatedCustomer.name).toBe(updates.name);
  });

  it('should delete a customer', async () => {
    const customerId = 1; // Replace with an actual customer ID
    await customerService.deleteCustomer(customerId);
    const deletedCustomer = await customerService.getCustomerById(customerId);
    expect(deletedCustomer).toBeUndefined();
  });
});
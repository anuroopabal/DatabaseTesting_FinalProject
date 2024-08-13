import { Sale } from '../../entities/Sale';
import { SaleService } from '../../services/sale.service';

describe('Sale Service', () => {
  const saleService = new SaleService();

  it('should create a new sale', async () => {
    const newSaleData: Partial<Sale> = {
      customer_id: 1, // Replace with an actual customer ID
      book_id: 1, // Replace with an actual book ID
      saledate: new Date(),
      quantity: 2,
    };

    const createdSale = await saleService.createSale(newSaleData as Sale);
    expect(createdSale).toBeDefined();
    expect(createdSale.quantity).toBe(newSaleData.quantity);
  });

  it('should retrieve a sale by ID', async () => {
    const saleId = 1; // Replace with an actual sale ID
    const retrievedSale = await saleService.getSaleById(saleId);
    expect(retrievedSale).toBeDefined();
  });

  it('should update a sale', async () => {
    const saleId = 1; // Replace with an actual sale ID
    const updates: Partial<Sale> = { quantity: 3 };
    const updatedSale = await saleService.updateSale(saleId, updates);
    expect(updatedSale).toBeDefined();
    expect(updatedSale?.quantity).toBe(updates.quantity);
  });

  it('should delete a sale', async () => {
    const saleId = 1; // Replace with an actual sale ID
    await saleService.deleteSale(saleId);
    const deletedSale = await saleService.getSaleById(saleId);
    expect(deletedSale).toBeUndefined();
  });
});
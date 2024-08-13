// sale.service.ts
import { Sale } from '../entities/Sale'; // Import your Sale entity
import { AppDataSource } from '../utils/database';

export class SaleService {
    private readonly saleRepository = AppDataSource.getRepository(Sale);

    async createSale(saleData: Sale): Promise<Sale> {
        return this.saleRepository.save(saleData);
    }

    async getSaleById(id: number): Promise<Sale | null> {
        return this.saleRepository.findOneBy({id} as any);
    }

    async updateSale(id: number, updatedData: Partial<Sale>): Promise<Sale | null> {
        await this.saleRepository.update(id, updatedData);
        return this.getSaleById(id);
    }

    async deleteSale(id: number): Promise<void> {
        await this.saleRepository.delete(id);
    }
}
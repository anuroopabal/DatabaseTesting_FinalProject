// sale.controller.ts

import { Request, Response } from 'express';
import { SaleService } from '../services/sale.service'; // Import your SaleService
import { Sale } from '../entities/Sale'; // Import your Sale entity

export class SaleController {
    private readonly saleService: SaleService;

    constructor() {
        this.saleService = new SaleService(); // Initialize your SaleService
    }

    async createSale(req: Request, res: Response): Promise<void> {
        try {
            const saleData: Sale = req.body; // Assuming data is sent in the request body
            const createdSale = await this.saleService.createSale(saleData);
            res.status(201).json(createdSale);
        } catch (error) {
            res.status(500).json({ error: 'Error creating sale' });
        }
    }

    async getSale(req: Request, res: Response): Promise<void> {
        try {
            const saleId: number = parseInt(req.params.saleId, 10);
            const sale = await this.saleService.getSaleById(saleId);
            if (sale) {
                res.status(200).json(sale);
            } else {
                res.status(404).json({ message: 'Sale not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Error fetching sale' });
        }
    }

    async updateSale(req: Request, res: Response): Promise<void> {
        try {
            const saleId: number = parseInt(req.params.saleId, 10);
            const updatedData: Partial<Sale> = req.body; // Assuming partial data for update
            const updatedSale = await this.saleService.updateSale(saleId, updatedData);
            if (updatedSale) {
                res.status(200).json(updatedSale);
            } else {
                res.status(404).json({ message: 'Sale not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Error updating sale' });
        }
    }

    async deleteSale(req: Request, res: Response): Promise<void> {
        try {
            const saleId: number = parseInt(req.params.saleId, 10);
            await this.saleService.deleteSale(saleId);
            res.status(204).send(); // No content (successful deletion)
        } catch (error) {
            res.status(500).json({ error: 'Error deleting sale' });
        }
    }
}



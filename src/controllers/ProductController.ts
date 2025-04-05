import { Request, Response } from 'express';
import { ProductServiceImpl } from '../services/ProductServiceImpl';

export class ProductController {
  private productService = new ProductServiceImpl();

  // Convertimos los métodos a arrow functions para preservar el contexto de `this`
  findAll = async (req: Request, res: Response): Promise<void> => {
    const products = await this.productService.findAll();
    res.json(products);
  };

  findById = async (req: Request, res: Response): Promise<void> => {
    const id = Number(req.query.id); // usando queryParams
    const product = await this.productService.findById(id);
    if (!product) {
      res.status(404).json({ message: 'Producto no encontrado' });
      return;
    }
    res.json(product);
  };

  create = async (req: Request, res: Response): Promise<void> => {
    const product = await this.productService.create(req.body);
    res.status(201).json(product);
  };

  update = async (req: Request, res: Response): Promise<void> => {
    const id = Number(req.params.id); // usando path variable
    const product = await this.productService.update(id, req.body);
    if (!product) {
      res.status(404).json({ message: 'Producto no encontrado' });
      return;
    }
    res.json(product);
  };

  delete = async (req: Request, res: Response): Promise<void> => {
    const id = Number(req.params.id);
    const success = await this.productService.delete(id);
    if (!success) {
      res.status(404).json({ message: 'Producto no encontrado' });
      return;
    }
    res.json({ message: 'Producto eliminado correctamente' });
  };
}
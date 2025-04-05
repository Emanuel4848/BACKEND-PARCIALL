import { Request, Response } from 'express';
import { ProductServiceImpl } from '../services/ProductServiceImpl';

export class ProductController {
  private productService = new ProductServiceImpl();


  findAll = async (req: Request, res: Response): Promise<void> => {
    try {
      const products = await this.productService.findAll();
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener los productos' });
    }
  };

  findById = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = Number(req.query.id); 
      const product = await this.productService.findById(id);
      if (!product) {
        res.status(404).json({ message: 'Producto no encontrado' });
        return;
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener el producto' });
    }
  };

  create = async (req: Request, res: Response): Promise<void> => {
    try {
      const product = await this.productService.create(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear el producto' });
    }
  };


  update = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = Number(req.params.id);
      const product = await this.productService.update(id, req.body);
      if (!product) {
        res.status(404).json({ message: 'Producto no encontrado' });
        return;
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar el producto' });
    }
  };

  delete = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = Number(req.params.id);
      const success = await this.productService.delete(id);
      if (!success) {
        res.status(404).json({ message: 'Producto no encontrado' });
        return;
      }
      res.json({ message: 'Producto eliminado correctamente' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar el producto' });
    }
  };
}
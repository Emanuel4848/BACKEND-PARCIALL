import { Product } from '../models/Product';

export class ProductRepository {
  async findAll(): Promise<Product[]> {
    try {
      return await Product.findAll();
    } catch (error) {
      throw new Error(`Error al obtener los productos`);
    }
  }

  async findById(id: number): Promise<Product | null> {
    try {
      return await Product.findByPk(id);
    } catch (error) {
      throw new Error(`Error al obtener el producto con ID ${id}`);
    }
  }

  async create(productData: Partial<Product>): Promise<Product> {
    try {
      return await Product.create(productData);
    } catch (error) {
      throw new Error(`Error al crear el producto}`);
    }
  }

  async update(id: number, productData: Partial<Product>): Promise<[number]> {
    try {
      return await Product.update(productData, { where: { id } });
    } catch (error) {
      throw new Error(`Error al actualizar el producto con ID ${id}`);
    }
  }

  async delete(id: number): Promise<number> {
    try {
      return await Product.destroy({ where: { id } });
    } catch (error) {
      throw new Error(`Error al eliminar el producto con ID ${id}`);
    }
  }
}
import { Product } from '../models/Product';

export class ProductRepository {
  async findAll(): Promise<Product[]> {
    return await Product.findAll();
  }

  async findById(id: number): Promise<Product | null> {
    return await Product.findByPk(id);
  }

  async create(productData: Partial<Product>): Promise<Product> {
    return await Product.create(productData);
  }

  async update(id: number, productData: Partial<Product>): Promise<[number]> {
    return await Product.update(productData, { where: { id } });
  }

  async delete(id: number): Promise<number> {
    return await Product.destroy({ where: { id } });
  }
}
import { Product } from '../models/Product';

export class ProductServiceImpl {

  async findAll() {
    return await Product.findAll();
  }


  async findById(id: number) {
    return await Product.findByPk(id);
  }


  async create(data: any) {
    return await Product.create(data);
  }


  async update(id: number, data: any) {
    const product = await Product.findByPk(id);
    if (!product) return null;
    return await product.update(data);
  }

  async delete(id: number) {
    const product = await Product.findByPk(id);
    if (!product) return false;
    await product.destroy();
    return true;
  }
}
import { Product } from '../models/Product';

export class ProductServiceImpl {
  // Método para obtener todos los productos
  async findAll() {
    return await Product.findAll();
  }

  // Método para obtener un producto por su ID
  async findById(id: number) {
    return await Product.findByPk(id);
  }

  // Método para crear un nuevo producto
  async create(data: any) {
    return await Product.create(data);
  }

  // Método para actualizar un producto
  async update(id: number, data: any) {
    const product = await Product.findByPk(id);
    if (!product) return null;
    return await product.update(data);
  }

  // Método para eliminar un producto
  async delete(id: number) {
    const product = await Product.findByPk(id);
    if (!product) return false;
    await product.destroy();
    return true;
  }
}
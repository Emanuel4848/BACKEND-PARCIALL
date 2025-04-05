import { Sequelize } from 'sequelize-typescript';
import { Product } from '../models/Product';

export const sequelize = new Sequelize({
  database: "tienda", 
  username: "postgres",
  password: "EMANUEL1234567",
  host: "localhost",
  dialect: 'postgres',
  models: [Product],
});


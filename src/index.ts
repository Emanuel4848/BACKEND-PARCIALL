import express from "express";
import cors from "cors";
import productRoutes from "./routes/productRoutes";
import { sequelize } from "./config/database";

const app = express();

app.use(cors()); // Habilita CORS
app.use(express.json()); // Para parsear el cuerpo de las solicitudes en JSON

// Rutas de productos
app.use('/api/products', productRoutes);

// Conectar a la base de datos y levantar el servidor
sequelize.sync({ alter: true })
  .then(() => {
    console.log("Database connected");
    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });
import express from "express";
import cors from "cors";
import productRoutes from "./routes/productRoutes"; 
import { sequelize } from "./config/database";

const app = express();

app.use(cors()); 
app.use(express.json()); 


app.use('/api/products', productRoutes);


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
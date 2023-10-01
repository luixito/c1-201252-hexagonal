import express from "express";
import cors from "cors";
import "dotenv/config";
import { bookRoutes } from "./review/infrastructure/bookRoutes";

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/v1/books/', reviewRoutes);

const port = process.env.PORT || 3020;
app.listen(port, () => {
  console.log(`funcionando desde: ${port}`);
});

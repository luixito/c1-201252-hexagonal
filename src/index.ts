import express from "express";
import cors from "cors";
import "dotenv/config";
import { reviewRoutes } from "./review/infrastructure/reviewRoutes";

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/v1/review/', reviewRoutes);

const port = process.env.PORT || 3020;
app.listen(port, () => {
  console.log(`funcionando desde: ${port}`);
});
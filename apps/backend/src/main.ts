import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import connectToDatabase from "./core/config/mongoose.config";
import { corsOptions } from "./core/config/cors.config";
import { router } from "./routes/routes";

dotenv.config();

const host = process.env.HOST || "localhost";
const port = process.env.PORT || 3000;

connectToDatabase();

const app = express();

app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/v1/pollapp', router);

app.listen(Number(port), () => {
  console.log(`[ ready ] http://${host}:${port}/api/v1/pollapp`);
});

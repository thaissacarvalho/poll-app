import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import { createServer } from "http";
import { Server } from "socket.io";
import connectToDatabase from "./core/config/mongoose.config";
import { corsOptions } from "./core/config/cors.config";
import { router } from "./routes/routes";
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import { swaggerOptions } from "./core/config/swagger.config";

dotenv.config();

const host = process.env.HOST || "localhost";
const port = process.env.PORT || 3000;
const swaggerDocs = swaggerJSDoc(swaggerOptions);

connectToDatabase();

const app = express();

app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json());
app.use('/api/v1/pollapp', router);
app.use('/api/v1/pollapp/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*", 
    methods: ["GET", "POST"]
  }
});

io.on("connection", (socket) => {
  console.log("Novo cliente conectado");

  socket.on("disconnect", () => {
    console.log("Cliente desconectado");
  });
});

server.listen(Number(port), () => {
  console.log(`[ ready ] http://${host}:${port}/api/v1/pollapp\n[ docs ] http://${host}:${port}/api/v1/pollapp/docs`);
});

import express from "express";
import cors from "cors";
import { front } from "./utils/config.js";
import { initAPIRoutes } from "./routes/routes.js";

const app = express();
const corsOptions = {
  origin: `http://${front.host}:${front.port}`,
  allowedHeaders: ["Content-Type", "Authorization", "idVideo"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};
app.use(express.json()); //! Middleaware para leer json

app.use(cors(corsOptions));
app.use("/api", initAPIRoutes());

export default app;

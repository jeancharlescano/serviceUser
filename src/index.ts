import express from "express";
import morgan from "morgan";
import cors from "cors";
import * as dotenv from "dotenv";
import { createConnection } from "typeorm";
import { CONNECTION_OPTIONS } from "./database";

import userRouter from "./routes/user.routes";

dotenv.config();
const app = express();

createConnection(CONNECTION_OPTIONS);

// Middlewares
app.use(cors());
app.use(express.json());

// Debuger
app.use(morgan("dev"));

// Routes
app.use("/api", userRouter);

app.listen(3000, () =>
  console.log(`Server start on port`, 3000)
);

import express from "express";
import { Request, Response } from "express";
import cors from "cors";
import router from "./router.js";
import dotenv from "dotenv";
import { PORT } from './config.js'
import { connectDB } from "./models/index.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.use((_req: Request, res: Response) => {
  res.status(404).send("This route does not exist");
});

(async () => {
  await connectDB();
  app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
})();

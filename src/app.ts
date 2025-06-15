import express, { Request, Response } from "express";
import envSchema from "./utils/env";

const app = express();
const port = envSchema.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

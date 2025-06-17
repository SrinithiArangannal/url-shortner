import "express-async-errors";

import express from "express";
import envSchema from "@/shared/utils/env";
import qs from "qs";
import cors from "cors";
import helmet from "helmet";
import { connectDB } from "@/configuration/database";

connectDB();

const app = express();

app.set("query parser", (str: string) => {
  return qs.parse(str, { arrayLimit: 1000, depth: 10 });
});
app.use(cors());
app.use(helmet());

const port = envSchema.PORT;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

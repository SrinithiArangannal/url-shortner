import { DataSource } from "typeorm";
import * as dotenv from "dotenv";
import logger from "@/shared/utils/logger";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  logging: true,
  entities: [],
  migrations: [__dirname + "/../repository/migrations/*{.ts}"],
});

let dataSource: DataSource;
export const connectDB = async (): Promise<DataSource> => {
  if (dataSource) return dataSource;
  dataSource = await AppDataSource.initialize();
  logger.info("Database connection successful");
  return dataSource;
};

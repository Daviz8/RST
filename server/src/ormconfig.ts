import { DataSource } from "typeorm";
import { User } from "./entities/User";
import { Admin } from "./entities/Admin";
import dotenv from "dotenv";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  entities: [User, Admin],
  migrations: ["src/migrations/*.ts"],
  synchronize: false,
});



import Sequelize from "sequelize";
import dotenv from "dotenv";

import UserModel from "./user.js";
import CompanyModel from "./company.js";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
    logging: false,
  }
);

const User = UserModel(sequelize, Sequelize.DataTypes);
const Company = CompanyModel(sequelize, Sequelize.DataTypes);

export { sequelize, User, Company };
export default { sequelize, User, Company };

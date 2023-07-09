import { Sequelize } from "sequelize";
import { config } from "../config/environment";

export class SequelizeConnection {
  private static instance: Sequelize;
  private constructor() {}

  public static getInstance(): Sequelize {
    if (!SequelizeConnection.instance) {
      this.databaseConnection();
      this.testConnection();
    }
    return this.instance;
  }

  private static databaseConnection() {
    const dialect = "postgres";
    SequelizeConnection.instance = new Sequelize(
      config.DB_NAME,
      config.DB_USER,
      config.DB_PASSWORD,
      { host: "corserva_db", dialect }
    );
  }

  private static async testConnection() {
    try {
      await SequelizeConnection.instance.authenticate();
      console.log("Connection has been established successfully.");
    } catch (err) {
      console.log(err);
    }
  }
}

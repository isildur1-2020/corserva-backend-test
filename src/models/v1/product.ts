import { DataTypes } from "sequelize";
import { sequelize } from "../../database/connection";

export interface IProduct {
  name: string;
  price: number;
  stock: number;
}

export const Product = sequelize.define(
  "Product",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      unique: true,
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

(async () => {
  try {
    await Product.sync({ alter: true });
    console.log("Product model was sync successfully.");
  } catch (err) {
    console.log(err);
  }
})();

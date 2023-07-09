import { DataTypes, Sequelize } from "sequelize";

type OrderSaleStatus = "PENDING" | "COMPLETED" | "CANCELED";

interface ProductInfo {
  productId: number;
  discount: number;
  quantity: number;
}

export interface IOrderSale {
  id: number;
  status: OrderSaleStatus;
  trackingInfo: string;
  products: ProductInfo[];
}

export default (sequelize: Sequelize) => {
  return sequelize.define(
    "orderSale",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      status: {
        type: DataTypes.STRING,
        validate: {
          isIn: [["PENDING", "COMPLETED", "CANCELED"]],
        },
        allowNull: false,
      },
      trackingInfo: {
        type: DataTypes.STRING,
        validate: {
          isAlphanumeric: true,
        },
      },
    },
    {
      timestamps: true,
    }
  );
};

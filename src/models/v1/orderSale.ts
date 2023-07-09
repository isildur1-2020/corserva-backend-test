import { DataTypes, Sequelize } from "sequelize";

type OrderSaleStatus = "PENDING" | "COMPLETED" | "CANCELED";

export interface IProduct {
  productId: number;
  quantity: number;
  discount: number;
}

export interface IOrderSale {
  status: OrderSaleStatus;
  trackingInfo: string;
  products: IProduct[];
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

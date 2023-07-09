import { Sequelize, DataTypes } from "sequelize";
import { ProductModel, OrderSaleModel } from "../../database/init";

export default (sequelize: Sequelize) => {
  return sequelize.define("orderProduct", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    discount: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    orderSaleId: {
      type: DataTypes.INTEGER,
      references: {
        model: OrderSaleModel,
        key: "id",
      },
    },
    productId: {
      type: DataTypes.INTEGER,
      references: {
        model: ProductModel,
        key: "id",
      },
    },
  });
};

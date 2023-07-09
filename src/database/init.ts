import Product from "../models/v1/product";
import OrderSale from "../models/v1/orderSale";
import { SequelizeConnection } from "./connection";
import OrderProduct from "../models/v1/orderProduct";

export const sequelize = SequelizeConnection.getInstance();
export const ProductModel = Product(sequelize);
export const OrderSaleModel = OrderSale(sequelize);
export const OrderProductModel = OrderProduct(sequelize);
OrderSaleModel.belongsToMany(ProductModel, { through: OrderProductModel });
ProductModel.belongsToMany(OrderSaleModel, { through: OrderProductModel });

sequelize.sync({ alter: true });

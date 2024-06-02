import ItemModel from "../models/item";

export const getOrders = async () => {
  const responseOrders = await ItemModel.find({});
  return responseOrders;
};

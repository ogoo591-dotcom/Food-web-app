import { foodOrderModel } from "../../model/foodOrder-model.js";

export const getFoodOrder = async (req, res) => {
  const dbFoodOrder = await foodOrderModel.find();

  res.status(200).json(dbFoodOrder);
};

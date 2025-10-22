import { foodCategoryModel } from "../../model/foodCategory-model.js";

export const getFoodCategory = async (req, res) => {
  const dbFoodCategory = await foodCategoryModel.find();

  res.status(200).json(dbFoodCategory);
};

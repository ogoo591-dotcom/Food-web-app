import { foodModel } from "../../model/food-model.js";

export const getFoodCategoryId = async (req, res) => {
  const { categoryId } = req.params;
  try {
    const dbFood = await foodModel.find({ category: categoryId });
    res.status(200).json(dbFood);
  } catch (error) {
    res.send(error);
  }
};

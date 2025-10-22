import { foodCategoryModel } from "../../model/foodCategory-model.js";

export const deleteFoodCategory = async (req, res) => {
  const { id } = req.body;

  try {
    const foodCategory = await foodCategoryModel.findByIdAndDelete(
      req.body._id
    );
    res.send("Food category deleted successfully!", foodCategory);
  } catch (error) {
    res.send(error);
  }
};

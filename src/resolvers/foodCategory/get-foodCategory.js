import { foodCategoryModel } from "../../model/foodCategory-model.js";

export const getFoodCategory = async (req, res) => {
  try {
    const { foodCategoryId } = req.params;

    if (foodCategoryId) {
      const one = await foodCategoryModel.findById(foodCategoryId);
      return one ? res.json(one) : res.status(404).json({ error: "Not found" });
    }
    const all = await foodCategoryModel.find().sort({ createdAt: -1 });
    return res.json(all);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};

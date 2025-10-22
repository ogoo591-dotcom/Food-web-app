import { foodModel } from "../../model/food-model.js";

export const deleteFood = async (req, res) => {
  const { id } = req.params.id;
  try {
    const food = await foodModel.findByIdAndDelete(req.body._id);
    res.send("Food deleted successfully!", food);
  } catch (error) {
    res.send(error);
  }
};

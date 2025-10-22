import { foodModel } from "../../model/food-model.js";

export const updateFood = async (req, res) => {
  const updateFood = req.body;

  await foodModel.findByIdAndUpdate(req.body._id, {
    foodName: updateFood.foodName,
    price: updateFood.price,
    image: updateFood.image,
    ingredients: updateFood.ingredients,
    category: updateFood.category,
  });
  res.send("Food updated successfully!");
};

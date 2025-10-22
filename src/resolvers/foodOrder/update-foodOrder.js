import { foodOrderModel } from "../../model/foodOrder-model.js";

export const updateFoodOrder = async (req, res) => {
  const updateFoodOrder = req.body;

  await foodOrderModel.findByIdAndUpdate(req.body._id, {
    user: updateFoodOrder.user,
    totalPrice: updateFoodOrder.totalPrice,
    foodOrderItems: updateFoodOrder.foodOrderItems,
    status: updateFoodOrder.status,
  });
  res.send("Food-order updated successfully!");
};

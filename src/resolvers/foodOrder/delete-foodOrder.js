import { foodOrderModel } from "../../model/foodOrder-model.js";

export const deleteFoodOrder = async (req, res) => {
  const { id } = req.body;

  try {
    const foodOrder = await foodOrderModel.findByIdAndDelete(req.body._id);
    res.send("User deleted successfully!", foodOrder);
  } catch (error) {
    res.send(error);
  }
};

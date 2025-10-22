import { userModel } from "../../model/user-model.js";

export const deleteUsers = async (req, res) => {
  const { id } = req.body;
  try {
    const user = await userModel.findByIdAndDelete(req.body.id);
    res.send("User deleted successfully!", user);
  } catch (error) {
    res.send(error);
  }
};

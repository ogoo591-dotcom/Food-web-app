import { userModel } from "../../model/user-model.js";

export const createUsers = async (req, res) => {
  const newUser = req.body;

  try {
    const user = await userModel.create({
      email: newUser.email,
      password: newUser.password,
      phoneNumber: newUser.phoneNumber,
      address: newUser.address,
      role: newUser.role,
      orderedFoods: newUser.orderedFoods,
      ttl: newUser.ttl,
      isVerified: newUser.isVerified,
      createdAt: newUser.createdAt,
      updatedAt: newUser.updatedAt,
    });

    res.send("New user added", user);
  } catch (error) {
    res.send(error);
  }
};

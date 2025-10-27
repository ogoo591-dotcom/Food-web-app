import { userModel } from "../../model/user-model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const createLogin = async (req, res) => {
  const body = req.body;

  const user = await userModel.findOne({ email: body.email });
  console.log(user);

  const result = await bcrypt.compare(body.password, user.password);
  if (result === true) {
    var token = jwt.sign({ email: user.email, id: user._id }, "secret-key");
    res.send({ message: `User  ${body.email} logged in!`, token: token });
  }

  res.send("Invalid email or password");
};

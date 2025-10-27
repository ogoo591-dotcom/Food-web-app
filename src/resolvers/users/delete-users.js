import jwt from "jsonwebtoken";

export const deleteUsers = (req, res) => {
  const token = req.headers.authorization;

  try {
    jwt.verify(token, "secret-key");
    const id = req.params._id;
    res.send("User deleted successfully!");
  } catch (err) {
    console.log(err);
    res.status(401).send("Unauthorized");
  }
};

export const createLogout = async (req, res) => {
  return res.status(200).json({ message: "Logged out" });
};

import mongoose from "mongoose";

export const UserRoleEnum = { USER: "USER", ADMIN: "ADMIN" };
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    email: { type: String, required: true, default: "No Email" },
    password: { type: String, required: true, select: false },
    phoneNumber: { type: String, trim: true },
    address: { type: String, trim: true },
    role: { type: String, enum: Object.values(UserRoleEnum), default: "USER" },
    orderedFoods: [{ type: mongoose.Schema.Types.ObjectId, ref: "FoodOrder" }],
    ttl: Date,
    isVerified: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const userModel = mongoose.model("user", UserSchema);

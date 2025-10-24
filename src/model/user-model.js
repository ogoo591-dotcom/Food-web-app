import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema(
  {
    id: ObjectId,
    email: { type: String, required: true, default: "No Email" },
    password: { type: String, required: true, select: false },
    phoneNumber: { type: String, trim: true },
    address: { type: String, trim: true },
    role: { type: String, enum: ["USER", "ADMIN"], default: "USER" },
    orderedFoods: [{ type: ObjectId, ref: "foodOrder" }],
    ttl: Date,
    isVerified: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    versionKey: false,
  }
  //  await userModel.findByIdAndUpdate({
  // orderedFoods.push(foodOrder._id)
  // });
);

export const userModel = mongoose.model("user", UserSchema);

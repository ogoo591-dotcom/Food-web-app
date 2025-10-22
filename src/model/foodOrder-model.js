import mongoose from "mongoose";

const Schema = mongoose.Schema;

const FoodOrderSchema = new Schema(
  {
    user: { type: String, required: true, default: "No Name" },
    totalPrice: Number,
    foodOrderItems: { type: String },
    status: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const foodOrderModel = mongoose.model("foodOrder", FoodOrderSchema);

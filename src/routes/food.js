import express from "express";
import { getFood } from "../resolvers/food/get-food.js";
import { createFood } from "../resolvers/food/create-food.js";
import { deleteFood } from "../resolvers/food/delete-food.js";
import { updateFood } from "../resolvers/food/update-food.js";
import { getFoodCategoryId } from "../resolvers/food/get-foodCategoryId.js";

export const foods = express.Router();

foods.get("/", getFood);
foods.get("/:categpryId", getFoodCategoryId);
foods.post("/", createFood);
foods.put("/", updateFood);
foods.delete("/:id", deleteFood);

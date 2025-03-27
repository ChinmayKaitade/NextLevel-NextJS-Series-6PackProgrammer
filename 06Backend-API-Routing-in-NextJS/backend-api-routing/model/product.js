import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
});

mongoose.models = {};

export const Product = mongoose.model("Product", schema);

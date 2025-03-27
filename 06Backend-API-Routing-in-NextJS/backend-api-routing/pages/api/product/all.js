import { Product } from "@/model/product";
import { connectDB } from "@/utils/database";

export default async function handler(req, res) {
  connectDB();

  const products = await Product.find({});

  res.status(200).json({ success: true, products });
}

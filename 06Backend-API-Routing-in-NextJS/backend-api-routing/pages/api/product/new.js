import { Product } from "@/model/product";
import { connectDB } from "@/utils/database";

export default async (req, res) => {
  await connectDB();

  const { price, name, category } = req.body;

  if (req.method !== "POST") {
    res.status(404).json({
      success: false,
      message: `No API with ${req.method} method`,
    });
  } else {
    await connectDB();

    const { price, name, category } = req.body;

    await Product.create({ name, price, category });

    res.status(201).json({
      success: true,
      message: "Product Created Successfully",
    });
  }
};

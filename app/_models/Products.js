import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
  productName: {
    type: String,
  },
  productQty: {
    type: Number,
  },
  productPrice: {
    type: Number,
  },
  productId: {
    type: String,
  },
});

var Product = mongoose.models.Product || mongoose.model("Product", productsSchema);
export default Product;

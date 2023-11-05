import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
  productName:{
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

module.exports = mongoose.model("products", productsSchema);

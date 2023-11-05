// pages/api/products/[barcode].js

import Product from "@/app/_models/Products";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  const { pathname } = new URL(req.url);
  const barcode = pathname.split("/")[3];
  try {
    const product = await Product.findOne({productId: barcode});
    if (product) {
      return new NextResponse(JSON.stringify(product), {status: 200});
    } else {
      return new NextResponse("Product not found", {status: 404});
    }
  } catch (error) {
    return new NextResponse("Internal Error", {status: 500});
  }
}

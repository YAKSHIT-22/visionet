"use client";
import React from "react";
import { useState, useEffect } from "react";
import BarcodeScanner from "../_components/BarcodeScanner";
import ProductDetails from "../_components/ProductDetails";

const page = () => {
  const [scannedBarcode, setScannedBarcode] = useState("");
  const [product, setProduct] = useState(null);

  const fetchProductDetails = async (barcode) => {
    try {
      const response = await fetch(`/api/products/${barcode}`);
      if (response.ok) {
        const data = await response.json();
        setProduct(data);
      } else {
        setProduct(null);
      }
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };
  useEffect(() => {
    if (scannedBarcode) {
      fetchProductDetails(scannedBarcode);
    }
  }, [scannedBarcode]);

  return (
    <section className="w-screen min-h-screen p-2 bg-white text-gray-800">
      <div className="flex items-center justify-center w-full h-full p-2">
        <div className="flex items-center justify-center md:flex-row flex-col w-full h-full">
          <div className="w-1/2">
            <BarcodeScanner onScan={setScannedBarcode} />
          </div>
          <div className="w-1/2">
            <ProductDetails product={product} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;

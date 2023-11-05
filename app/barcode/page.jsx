"use client";
import React, { useEffect, useRef, useState } from "react";
import { BarcodeGenerator } from "@syncfusion/ej2-barcode-generator";
import { registerLicense } from "@syncfusion/ej2-base";

// Registering Syncfusion license key
registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1NHaF5cXmVCf1FpQHxbf1xzZFxMYFpbR3BPMyBoS35RdURiWXpeeXRTRWdbWEV2"
);

const Page = () => {
  const arr = ["3246787", "3246788", "3246789"];
  const [i, setI] = useState(0);
  const barcodeContainerRef = useRef(null);

  useEffect(() => {
    if (barcodeContainerRef.current) {
      // Clear the previous barcode container content
      barcodeContainerRef.current.innerHTML = "";

      // Create the new barcode
      const barcode = new BarcodeGenerator({
        width: "200px",
        height: "150px",
        mode: "SVG",
        type: "Code39",
        value: arr[i],
      });

      // Append the new barcode to the container
      barcode.appendTo(barcodeContainerRef.current);
    }
  }, [i]);

  const handlePrev = (e) => {
    e.preventDefault();
    if (i > 0) {
      setI(i - 1);
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (i < arr.length - 1) {
      setI(i + 1);
    }
  };

  return (
    <section className="flex items-center justify-center w-screen h-screen bg-white">
      <div className="flex items-center justify-center w-full h-full p-1 flex-col">
        <div className="flex items-center justify-center p-1 text-gray-800 text-lg text-center">
          <h1>Product Barcode For demonstration</h1>
        </div>
        <div className="flex items-center justify-center flex-col w-full h-full relative p-4 gap-[4rem]">
            <div className="w-full flex items-center justify-center text-gray-700 text-center max-w-3xl">
                <h1 className="flex items-center justify-center">Product Barcodes Samples that will change on Button click according to product which is linked to central database so as to read about products details which then adds to the unique card having same type of unique barcode or Qrcode.</h1>
            </div>
          <div className="flex items-center justify-center w-full flex-row">
            <div ref={barcodeContainerRef} id="barcode"></div>
          </div>
          <div className="flex items-center justify-around p-2 w-full gap-2 max-w-xl">
            <button
              onClick={handlePrev}
              className={`${
                i === 0 ? "bg-slate-500" : "bg-green-500"
              } py-2 px-6 text-white rounded-sm`}
            >
              Prev
            </button>
            <button
              onClick={handleNext}
              className={`${
                i === arr.length - 1 ? "bg-slate-500" : "bg-green-500"
              } py-2 px-6 text-white rounded-sm`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;

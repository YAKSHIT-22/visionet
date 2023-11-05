// components/BarcodeScanner.js
import { useState } from "react";

const BarcodeScanner = ({ onScan }) => {
  const [barcode, setBarcode] = useState("");

  const handleScan = (value) => {
    setBarcode(value);
    onScan(value);
  };

  return (
    <div>
      <h1>Barcode Scanner</h1>
      <input
        type="text"
        value={barcode}
        onChange={(e) => setBarcode(e.target.value)}
      />
      <button onClick={() => handleScan(barcode)}>Simulate Scan</button>
    </div>
  );
};

export default BarcodeScanner;

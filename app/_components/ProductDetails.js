// components/ProductDetails.js
const ProductDetails = ({ product }) => {
    return (
      <div>
        <h1>Product Details</h1>
        {product ? (
          <div>
            <h2>{product.productId}</h2>
            <p>{product.productName}</p>
            <p>Price: ${product.productPrice}</p>
            {/* Display other product details */}
          </div>
        ) : (
          <p>No product found for the scanned barcode.</p>
        )}
      </div>
    );
  };
  
  export default ProductDetails;
  
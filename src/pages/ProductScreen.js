import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Rating from "../components/Rating";
import LoadingBox from "../components/LoadingBox";

function ProductScreen({ product, cartItems, setCartItems }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  if (!product) {
    setLoading(true);
  }

  const handleAddToCart = (currentProduct) => {
    const existingItem = cartItems.find(
      (item) => item._id === currentProduct._id
    );

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item._id === existingItem._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...currentProduct, quantity: 1 }]);
    }
  };

  const handleOrderNow = (e) => {
    e.preventDefault();
    navigate("/cart");
  };

  if (loading) {
    return <LoadingBox />;
  }
  console.log(cartItems);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        marginBottom: "5px",
        justifyContent: "center",
      }}
    >
      {product.map((currentProduct) => {
        const {
          _id,
          name,
          image,
          price,
          rating,
          description,
          category,
          numReviews,
        } = currentProduct;
        return (
 
          <div key={_id} style={{ padding: "20px",fontFamily:"Pacifico"}}>
            <img className="large_image" src={`${image}`} alt={name}></img>
            <div className="flexBetween">
              <h1>{name}</h1>
              <p>{category}</p>
            </div>

            <p>{description}</p>
            <Rating rating={rating} numReviews={numReviews} />
            <div className="flexBetween">
              <h3>Price: {price} Rs/-</h3>
              <div>
                <button
                  className="submitbttn"
                  onClick={() => handleAddToCart(currentProduct)}
                  id="addtocart"
                >
                  Add to Cart
                </button>
                <button
                  onClick={handleOrderNow}
                  id="ordernow"
                  className="submitbttn"
                >
                  Go to Cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductScreen;

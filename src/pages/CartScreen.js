import React from "react";

const CartScreen = ({ cartItems, setCartItems }) => {
  // Function to remove an item from the cart
  const removeFromCart = (product) => {
    setCartItems(cartItems.filter((item) => item._id !== product._id));
  };

  // Function to increment the quantity of an item
  const incrementQuantity = (product) => {
    setCartItems(
      cartItems.map((item) =>
        item._id === product._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Function to decrement the quantity of an item
  const decrementQuantity = (product) => {
    setCartItems(
      cartItems.map((item) =>
        item._id === product._id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Function to place an order
  const placeOrder = () => {
    // Add your logic to handle the order placement here
    // For example, you can show a success message and clear the cart items
    alert("Order placed successfully");
    setCartItems([]);
  };

  // Calculate the total price of the items in the cart
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div style={{ fontFamily: "Pacifico" }}>
      <h2>Your Order</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {cartItems.map((item) => (
            <div key={item._id} className="cartItem">
              <div>
                <h2>{item.name}</h2>
                <p>
                  <b>Price: </b>
                  {item.price} Rs/-
                </p>
              </div>

              <div>
                <button
                  className="submitbttn"
                  onClick={() => removeFromCart(item)}
                >
                  Remove from Cart
                </button>
                <br />
                <button
                  className="submitbttn"
                  onClick={() => decrementQuantity(item)}
                >
                  -
                </button>
                <span>
                  {" "}
                  <b>Quantity:</b> {item.quantity}{" "}
                </span>
                <button
                  className="submitbttn"
                  onClick={() => incrementQuantity(item)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
          <h1>Total Price: {totalPrice} Rs/-</h1>
          <button
            style={{ width: "80%" }}
            className="submitbttn"
            onClick={placeOrder}
          >
            Place Order
          </button>
        </div>
      )}
    </div>
  );
};

export default CartScreen;

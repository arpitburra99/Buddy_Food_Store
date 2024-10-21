import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    addToCart,
    food_list,
    getTotalCartAmount,
  } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className="cart container">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <>
                <div
                  className="cart-items-title cart-items-item"
                  key={item._id}
                >
                  <img src={item.image} alt="item-image" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  {/* <p>{cartItems[item._id]}</p> */}
                  <div className="quantity-controls">
                    <button
                      onClick={() => removeFromCart(item._id)}
                      disabled={cartItems[item._id] === 1}
                    >
                      -
                    </button>
                    <p>{cartItems[item._id]}</p>
                    <button onClick={() => addToCart(item._id)}>+</button>
                  </div>
                  <p>${cartItems[item._id] * item.price}</p>
                  <p className="cross" onClick={() => removeFromCart(item._id, true)}>
                    <MdDelete size={20} />
                  </p>
                </div>
                <hr />
              </>
            );
          }
          return null;
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Charge</p>
              <p>${getTotalCartAmount() > 0 ? 2 : 0}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>
                ${getTotalCartAmount() + (getTotalCartAmount() > 0 ? 2 : 0)}
              </p>
            </div>
          </div>
          <button onClick={() => navigate("/order")}>
            PROCESS TO CHECKOUT
          </button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="Enter code" />
              <button>Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

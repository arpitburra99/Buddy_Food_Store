import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(() => {
    // Load initial state from localStorage
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : {};
  });

  const addToCart = (itemId) => {
    if (cartItems[itemId]) {
      setCartItems({
        ...cartItems,
        [itemId]: cartItems[itemId] + 1,
      });
    } else {
      setCartItems({
        ...cartItems,
        [itemId]: 1,
      });
    }
  };

  const removeFromCart = (itemId, removeEntirely = false) => {
    if (removeEntirely) {
      // Remove the food item completely from the cart
      const newCartItems = { ...cartItems };
      delete newCartItems[itemId]; // Remove the food item from the cart
      setCartItems(newCartItems);
    } else if (cartItems[itemId] > 0) {
      // Decrement the quantity of the food item
      setCartItems({
        ...cartItems,
        [itemId]: cartItems[itemId] - 1,
      });
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((food) => food._id === item);
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const contextValue = {
    food_list,
    cartItems,
    addToCart,
    removeFromCart,
    setCartItems,
    getTotalCartAmount,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;

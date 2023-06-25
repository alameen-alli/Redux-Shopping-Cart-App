import React, { useEffect } from "react";
import "./App.css";

// Login page
import Auth from "./components/Auth";

import Layout from "./components/Layout";
import { useSelector } from "react-redux";

function App() {
  const cart = useSelector((state) => state.cart);
  const CartItems = useSelector((state) => state.cart.itemsList);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    fetch("https://redux-http-ec343-default-rtdb.firebaseio.com/cartItems.json",
      {
        method: 'PUT',
        body: JSON.stringify(cart)
      });
  }, [cart]);

  return (
    <div className="App">
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;

import React, { useEffect } from "react";
import Notification from "./components/Notification";
import "./App.css";

// Login page
import Auth from "./components/Auth";

import Layout from "./components/Layout";
import { useDispatch, useSelector } from "react-redux";
// import { uiActions } from "./store/ui-slice";
import { sendCartData, fetchData } from "./store/cart-actions";
let isFirstRender = true;

function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  // const CartItems = useSelector((state) => state.cart.itemsList);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);


  useEffect(() => {

    if (isFirstRender) {
      isFirstRender = false;
      return
    };

    if (cart.changed) {
      dispatch(sendCartData(cart));
    };
  }, [cart, dispatch]);

  // if (notification && notification.type) {
  //   // Access the 'type' property
  //   console.log(notification.type);
  // } else {
  //   // Handle the case when 'notification' is null or 'type' is undefined
  //   console.log("Notification is null or 'type' is undefined");
  // }

  return (
    <div className="App">
      {notification && <Notification type={notification.type} message={notification.message} />}
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;

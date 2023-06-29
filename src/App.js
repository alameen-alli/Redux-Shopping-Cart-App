import React, { useEffect } from "react";
import Notification from "./components/Notification";
import "./App.css";

// Login page
import Auth from "./components/Auth";

import Layout from "./components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "./store/ui-slice";
let isFirstRender = true;

function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  // const CartItems = useSelector((state) => state.cart.itemsList);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  

  useEffect(() => {
    const sendRequest = async () => {

      if (isFirstRender) {
        isFirstRender = false;
        return
      }

      //Send state as sending request
      dispatch(uiActions.showNotification({
        open: true,
        message: "Sending Request",
        type: 'warning'
      }));

      const res = await fetch("https://redux-http-ec343-default-rtdb.firebaseio.com/cartItems.json",
      {
        method: 'PUT',
        body: JSON.stringify(cart)
      });
      const data = await res.json();

      //Send state as request is successful.
      dispatch(uiActions.showNotification({
        open: true,
        message: "Sent Request to Database Successfully",
        type: 'success'
      }));

    }
    sendRequest().catch((err) => {
      // send state as error
      dispatch(uiActions.showNotification({
        open: true,
        message: "Sending Request Failed",
        type: 'error'
      }));
    })
  }, [cart]);

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

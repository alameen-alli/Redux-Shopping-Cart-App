import React from "react";
import "./App.css";

// Login page
import Auth from "./components/Auth"; 

import Layout from "./components/Layout";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <div className="App">
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout /> }
    </div>
  );
}

export default App;

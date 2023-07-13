import "./App.css";
import Cart from "./Components/Cart/Cart";
import Navigation from "./Components/Layout/Navigation";
import React, { Fragment, useState } from "react";
import Meals from "./Components/Meals/Meals";

function App() {
  const [showCart, setShowCart] = useState(false);
  function hideCart() {
    setShowCart(false);
  }
  function cartIsShown() {
    setShowCart(true);
  }
  return (
    <Fragment>
      <Navigation onClick={cartIsShown} />
      <Meals />
      {console.log(showCart)}
      {showCart && <Cart onToggle={hideCart} />}
    </Fragment>
  );
}

export default App;

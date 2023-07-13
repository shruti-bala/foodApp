import React, { Fragment } from "react";
import styles from "./button.module.css";
import CartIcon from "./CartIcon";
function Button(props) {
  return (
    <Fragment>
      <button className={styles.button} onClick={props.onClick}>
        <span className={styles.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={styles.badge}>2</span>
      </button>
      ;
    </Fragment>
  );
}

export default Button;

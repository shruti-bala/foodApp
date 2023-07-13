import React, { Fragment } from "react";
import styles from "./Input.module.css";
function Input(props) {
  return (
    <Fragment>
      <div className={styles.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input {...props.input}></input>
      </div>
    </Fragment>
  );
}
export default Input;

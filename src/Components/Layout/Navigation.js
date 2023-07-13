import classes from "./Navigation.module.css";
import React from "react";
import mealImage from "../../Images/meals.jpg";
import Button from "../UI/button";
function Navigation(props) {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <Button onClick={props.onClick}>Cart</Button>
      </header>
      <div className={classes.mainImage}>
        <img src={mealImage} alt="Food" />
      </div>
    </React.Fragment>
  );
}

export default Navigation;

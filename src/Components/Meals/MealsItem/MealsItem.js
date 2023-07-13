import styles from "./MealsItem.module.css";
import MealItemForm from "../../Cart/MealItemForm";

function MealsItem(props) {
  const price = `$${props.Meals.price}`;
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.Meals.name}</h3>
        <div className={StyleSheet.decription}>{props.Meals.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.Meals.id} />
      </div>
    </li>
  );
}

export default MealsItem;

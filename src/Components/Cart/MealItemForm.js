import { Fragment } from "react";
import Input from "../UI/Input";
import styles from "./MealItemForm.module.css";
function MealItemForm(props) {
  return (
    <Fragment>
      <form className={styles.form}>
        <Input
          label="Quantity"
          input={{
            id: "quantity_" + props.id,
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "0",
          }}
        />
        <button>+ Add</button>
      </form>
    </Fragment>
  );
}
export default MealItemForm;

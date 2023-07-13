import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
const cartItems = [
  {
    id: "c1",
    name: "Sushi",
    Quantity: "2",
    Amount: "$12.99",
  },
];

function Cart(props) {
  return (
    <Modal onClick={props.onToggle}>
      <div>
        <ul className={styles["cart-items"]}>
          {cartItems.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
      <div className={styles.total}>
        <span>Total Amount: </span>
        <span>25.88</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onToggle}>
          Close
        </button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
}
export default Cart;

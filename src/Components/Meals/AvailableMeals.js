import styles from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealsItem from "./MealsItem/MealsItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];
function AvailableMeals() {
  return (
    <section className={styles.meals}>
      <Card>
        {DUMMY_MEALS.map((meals) => (
          <MealsItem Meals={meals} key={meals.id}></MealsItem>
        ))}
      </Card>
    </section>
  );
}

export default AvailableMeals;

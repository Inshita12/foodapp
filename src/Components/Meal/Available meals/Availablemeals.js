import React, { Fragment } from "react";
import Card from "../../UI/Card/Card";

import MealItem from "../Meal Item/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Maggi",
    description: " veggies,cheese",
    price: 90,
  },
  {
    id: "m2",
    name: "Dal Makhni",
    description: "A divyansh specialty!",
    price: 150,
  },
  {
    id: "m3",
    name: "Aloo Parantha",
    description: "Divyansh Special",
    price: 50,
  },
  {
    id: "m4",
    name: "Salad",
    description: "Healthy...and green...",
    price: 100,
  },
];

const mealsavailable = () => {
  const mealslist = DUMMY_MEALS.map((meals) => (
    <MealItem
   key={meals.id}
   id={meals.id}
   name={meals.name}
   description={meals.description}
   price={meals.price}
    />
  ));
  return (
    <Fragment>
      <section>
        <Card>
          <ul>{mealslist}</ul>
        </Card>

      </section>
    </Fragment>
  );
};
export default mealsavailable;

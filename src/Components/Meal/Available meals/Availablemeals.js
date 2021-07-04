import React, { Fragment, useState, useEffect } from "react";
import Card from "../../UI/Card/Card";

import MealItem from "../Meal Item/MealItem";

const MealsAvailable = () => {
  const [mealsitems, setmealsitems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);
      const response = await fetch(
        "https://food-app-28464-default-rtdb.firebaseio.com/Meals.json"
      );

      if (!response.ok) {
        throw new Error("OOps,Something Went Wrong");
      }

      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setmealsitems(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setError(error.message);
    }); 
  }, []);

  if (isLoading) {
    return (
      <section id="meals-loading">
        <p>Loading...</p>
      </section>
    );
  }
  if (error) {
    return (
      <section id="meals-error">
        <p>{error}</p>
      </section>
    );
  }
  const mealslist = mealsitems.map((meals) => (
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
export default MealsAvailable;

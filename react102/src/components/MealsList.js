import React from "react";
import { useMealsListContext } from "./MealsProvider";

function MealsList() {
  const { meals } = useMealsListContext();
  return (
    <div>
      <p>Meals List Using Context API</p>
      {meals.map((meal, index) => (<h2 key={index}>{meal}</h2>))}
    </div>
  );
}

export default MealsList;

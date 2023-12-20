import React, { useState } from "react";

const MealsContext = React.createContext();

const todaysMeals = ["Bean soup", "Chicken Butter", "Stimming rice"];

function MealsProvider({ children }) {
  const [meals, setMealsList] = React.useState(todaysMeals);
  return (
    <div>
      <MealsContext.Provider value={{meals}}>{children}</MealsContext.Provider>
    </div>
  );
}

export const useMealsListContext = () => React.useContext(MealsContext);

export default MealsProvider;

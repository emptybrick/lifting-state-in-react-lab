// src/components/IngredientList/IngredientList.jsx

import Ingredient from "../Ingredient/Ingredient";
import Button from "../Button/Button";

const IngredientList = (props) => {
  return (
    <ul>
      {props.availableIngredients.map((ingredient, index) => (
        <Ingredient
          ingredient={ingredient}
          index={ index }
          key={index}
          onClick={ () => props.addToBurger(index) }
          text='+'
        />
      ))}
    </ul>
  );
};

export default IngredientList;

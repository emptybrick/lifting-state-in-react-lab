// src/components/BurgerStack/BurgerStack.jsx

import Ingredient from "../Ingredient/Ingredient";
import Button from "../Button/Button";

const BurgerStack = (props) => {
  return (
    <ul>
      {props.stack.map((ingredient, index) => (
        <Ingredient
          ingredient={ingredient}
          index={index}
          key={index}
          onClick={() => props.removeFromBurger(index)}
          text="-"
        />
      ))}
    </ul>
  );
};

export default BurgerStack;

import Button from "../Button/Button";

function Ingredient (props) {
    return (
    <li
    style={{ backgroundColor: props.ingredient.color }}
    key={props.index}
  >
    {props.ingredient.name}
    <Button onClick={props.onClick} text={props.text}></Button>
        </li>
    )
}

export default Ingredient;

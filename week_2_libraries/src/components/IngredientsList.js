import "./RecipeCard.css";
const IngredientsList = ({props}) => {
    const {data} = props;
    return (
    <div>
        {data}
    </div>
  );
};

export default IngredientsList;
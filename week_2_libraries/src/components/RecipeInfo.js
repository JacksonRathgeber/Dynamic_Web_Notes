import "./RecipeCard.css";

const RecipeInfo = (props) => {
  const { title, description } = props;
  return (
    <div className="recipe_info">
      <h2 className="recipe_title">{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default RecipeInfo;
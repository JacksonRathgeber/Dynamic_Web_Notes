import Card from "./components/Card";
import RecipeInfo from "./components/RecipeInfo";
import "./components/RecipeCard.css";
import {RECIPE} from "./components/recipe-data.js";
import IngredientsList from "./components/IngredientsList";
const App = () => {
  return (
    <>
      <Card>
        <RecipeInfo title={RECIPE.title} description={RECIPE.description}/>
        TITLE
      </Card>
      <div className="card_lists">
      </div>
    </>
  );
};

export default App;

import Card from './Card'
import RecipeInfo from './RecipeInfo'
import IngredientsList from './IngredientsList'
import InstructionsList from './InstructionsList'
import RecipeImg from './RecipeImg'
import UserRating from '../UserRating'
import './RecipeCard.css'

import {RECIPE} from './recipe-data'

const RecipeCard = () => {
  return (
    <Card title={RECIPE.title} description={RECIPE.description} 
    image={RECIPE.imgSrc} ingredients={RECIPE.ingredients} instructions={RECIPE.instructions}>
    </Card>
  )
}

export default RecipeCard

import RecipeInfo from './RecipeInfo'
import IngredientsList from './IngredientsList'
import InstructionsList from './InstructionsList'
import RecipeImg from './RecipeImg.js'
import UserRating from '../UserRating'
import './RecipeCard.css'

const Card = ({children, image, title, description, ingredients, instructions}) => {
  
  // children is a prop we get for free, children can be text,
  // or any other tags that need to become the innerhtml of this component tag
  
  return (
    <div className='card'>
      <RecipeImg imgSrc={image} />
      <div className="card_text">
        <RecipeInfo title={title} description={description} />
        <div className="card_lists">
          <IngredientsList data={ingredients} />
          <InstructionsList data={instructions} />
        </div>
        <UserRating />
      </div>
    </div>
  )
}

export default Card

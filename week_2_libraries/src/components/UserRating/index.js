import {useState} from 'react'
import {ReactComponent as Favorite} from '@material-design-icons/svg/filled/favorite.svg'
import './rating-styles.css'

export const UserRating = () => {
  const [count, setCount] = useState(0)

  const handlePlusClick = () => {
    if (count >= 5) {
      return
    }
    setCount(count + 1)
  }

  const handleMinusClick = () => {
    if (count <= 0) {
      return
    }
    setCount(count - 1)
  }

  return (
    <div className='rating-section'>
      <div className='buttons-section'>
        {count < 5 ? <button onClick={handlePlusClick} className='button'>[+]</button> : <div></div>}
        {count > 0 ? <button onClick={handleMinusClick} className='button'>[-]</button> : <div></div>}
      </div>
      <div className='hearts-section'>
        {[...Array(count)].map((i, index) => {
          return (
            <span key={index}>
              <Favorite />
            </span>
          )
        })}
      </div>
      {/* https://legacy.reactjs.org/docs/conditional-rendering.html */}
    </div>
  )
}

export default UserRating

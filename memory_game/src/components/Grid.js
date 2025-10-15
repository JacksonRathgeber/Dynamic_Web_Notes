import styles from './UI.module.css'
import CardPattern from '../assets/moroccan-flower-dark.png'
import Bilbo from '../assets/bilbo-baggins.png'
import Cameron from '../assets/cameron-poe.png'
import Nikki from '../assets/nikki-cage.png'
import Pollux from '../assets/pollux-troy.png'
import { useState } from 'react'

const cardImages = [{src: Bilbo}, {src: Cameron}, {src: Nikki}, {src: Pollux}]

export default function Grid(props) {
  const [cards, setCards] = useState([])
  
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.round(Math.random() * 1000) }))
    setCards(shuffledCards)
  }
  return (
    <>
      <button onClick={shuffleCards}>New Game</button>
      <div className={styles.container}>
        <div className={styles.grid}>
          {cards.map((card) => (
            <Card key={card.id} img={card.src} />
          ))}
        </div>
      </div>
    </>
  )
}

function Card(props) {
  return (
    <div className={styles.flip_card}>
      <div className={styles.flip_card_inner}>
        <div className={styles.flip_card_front}>
          <img src={CardPattern} alt="card back" />
        </div>
        <div className={styles.flip_card_back}>
          <img src={props.img} alt="card front" />
        </div>
      </div>
    </div>
  )
}

import React, {useState, useEffect} from 'react'
import Card from './Card'

function Game(props){
const {onClickLogic,score, highScore}=props
const Allimage=[
    {
        src:"",
        title:"pikachu"
    },
    {
        src:"",
        title:"balbasur"
    },
    {
        src:"",
        title:"charvizard"
    },
    {
        src:"",
        title:"golem"
    },
    {
        src:"",
        title:"pyduck"
    },
    {
        src:"",
        title:"gengar"
    },
    {
        src:"",
        title:"misty"
    },
    {
        src:"",
        title:"may"
    }
]

const [cards,setcards]=useState(Allimage);

const shuffle = (newCards) => {
    for (let i = newCards.length - 1; i > 0; i--) {
      let randomIdx = Math.floor(Math.random() * i);
      [newCards[randomIdx], newCards[i]] = [newCards[i], newCards[randomIdx]];
    }
  };
  

 useEffect(()=>{
     const newCards = [...cards];
     shuffle(newCards);
     setcards(newCards);
 },[score, highScore])

return(
    <>
    {cards.map( (card) =>(
        <Card title={card.title} scr={card.src} key={card.title} onClickLogic={onClickLogic}/>
    )
   
    )
}
    </>
)
}
export default Game;
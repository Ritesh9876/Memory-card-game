import React, { useState } from 'react'
import Game from './Main'
import Header from './Header'


function Logic(){
    const [CurrentScore,setCurrentScore]= useState(0)
    const [HighScore,setHighScore]=useState(0)
    const [ClickedArr,setClickedArr]=useState([])

   const handleScore = () =>{
       setCurrentScore((prev) => prev +1)
   }

   const handleHighScore =() =>{
       setHighScore(CurrentScore)
   }
   
   const handleCard = (cardTitle) =>{
       setClickedArr((prev) => [...prev,cardTitle])
   }

   const reset =() =>{
       setCurrentScore(0)
       setClickedArr([])
   }
   const onClickLogic = (cardTitle) =>{
       if(ClickedArr.includes(cardTitle)){
            reset()
       }else{
           handleCard(cardTitle)
           handleScore()
           if(!HighScore>CurrentScore) handleHighScore()
           
       }
   }
   return (
    <>
      <Header score={CurrentScore} highScore={HighScore} />
      <div className="card-container" id="card-container">
        <Game
          onClickLogic={onClickLogic}
          score={CurrentScore}
          highScore={HighScore}
        />
      </div>
    </>
  );
}
export default Logic
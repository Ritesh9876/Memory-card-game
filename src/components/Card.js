import React from 'react'

function Card (props){
    const  {
        title,scr,onClickLogic
    }=props

    return(
        <div className="card">
            <img src={scr} alt=""/>
            <h3 onClick={()=>onClickLogic(title)}>{title}</h3>
        </div>
    )

}

export default Card
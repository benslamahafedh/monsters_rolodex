import React from 'react'
import "./card.styles.css";

export const Card = prop=>{
    return(<div className='card-container'>
        <img src={`https://robohash.org/${prop.monster.id}?set=set2&size=180x180`} alt="monster" />
        <h2 >{prop.monster.name}</h2>
        <h2>{prop.monster.email}</h2>
    </div>)
}
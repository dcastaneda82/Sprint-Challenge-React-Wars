import React from "react";
import "./StarWars.css";
const StarWarsCards = props =>{
    return (
        <div className='SWCard'>
            <h1>{props.name}</h1>
            <div className='h2s'>
            <h2>Gender: {props.gender}</h2>
            <h2>Height: {props.height}</h2>
            <h2>Weight: {props.mass}</h2>
            <h2>Birth Year: {props.birthYear}</h2>
            </div>
            
        </div>
    )
}

export default StarWarsCards;
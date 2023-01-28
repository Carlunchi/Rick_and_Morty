import Card from '../CARD/Card.jsx';
import s from "../CARDS/Cards.module.css"
import React from 'react';


export default function Cards(props) {
   const { characters } = props;
   return (
   <div className={s.cards}>
      {characters.map((char)=>{
      return <Card 
          name={char.name}
          species={char.species}
          gender={char.gender}
          image={char.image}
          id={char.id}
          onClose={props.onClose}
   />})}</div>);
}

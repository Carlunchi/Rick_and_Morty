import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import s from "../DETAIL/Detail.module.css"




export default function Detail(){
    const [character, setCharacter] = useState({})
    const {detailId} = useParams();
    
    useEffect(() => {
      fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
           .then((response) => response.json())
           .then((char) => {
              if (char.name) {
                 setCharacter(char);
                 console.log(char)
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           })
           .catch((err) => {
              window.alert('No hay personajes con ese ID');
           });
        return setCharacter({});
     }, [detailId]);


     return(
      <div className={s.contenedor}>
        <div className={s.detail}>
         <img  className={s.imagen}src={character.image}/>
         <div className={s.text}>
            <h1>Name: {character.name}</h1>
            <h2>Status: {character.status}</h2>
            <h2>Species: {character.species}</h2>
            <h2>Gender: {character.gender}</h2>
            <h2>Origin: {character.origin?.name}</h2>
            </div>
            <div className={s.link}>
            <Link  to="/home"><button className={s.botton}>Home</button></Link>
            </div>
        </div>
        </div>
     )

}
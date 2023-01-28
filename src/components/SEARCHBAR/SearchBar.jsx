import React, { useState } from "react";
import s from "../SEARCHBAR/SearchBar.module.css"

export default function SearchBar(props) {

const [character, setCharacter] =  useState ("")
const handleChange = (e)=>{
   const{ value} = e.target;
   setCharacter(value)
}

function getRandomInt(max) {
   return Math.floor(Math.random() * max);
 }


   return (
      <div className={s.SearchBar} >
         <input type='search'  onChange={handleChange}/>
         <div className={s.botones}>
      <button className={s.agregar}  onClick={()=>{props.onSearch(character)}}>Agregar</button>
      <button className={s.random}   onClick={()=>props.onSearch(getRandomInt(826))}>Random</button>
      </div>
      </div>
   );
}

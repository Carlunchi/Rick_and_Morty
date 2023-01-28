import React, { useState } from "react";
import s from "../CARD/Card.module.css"
import { Link } from "react-router-dom";
import { addFavorite, deleteFavorite } from "../../redux/action/action.js";
import { connect, useDispatch } from "react-redux";
import { useEffect } from "react";




export function Card(props) {

   const [isFav, setIsFav] = useState(false);

   function handleFavorite(){
      if(isFav){
         setIsFav(false)
         props.deleteFavorite(props.id)
      }else {
         setIsFav(true)
         props.addFavorite(props)
      }
   }

   useEffect(() => {
   props.myFavorites?.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);

   return (
      <div className={s.contenedor}>
            
              {isFav ? (
               <button className={s.favorite} onClick={handleFavorite}>❤️</button>
            ) : (
               <button className={s.favorite} onClick={handleFavorite}>🤍</button>
            )}
            
         <button  className={s.button} onClick={() => props.onClose(props.id)}>X</button>
         <div className={s.texts}>
         <h2>{props.name}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         </div>
         <Link to={`/detail/${props.id}`}> <img className={s.imagen} src={props.image} alt="" /></Link>
        
      </div>
   );
}


export function mapDispatchToProps(dispatch){
   return {
      addFavorite: function(fav){
         dispatch(addFavorite(fav))
      },

      deleteFavorite: function(id){
         dispatch(deleteFavorite(id))
      }
   }
}

export function mapStateToProps (state){
   return {
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
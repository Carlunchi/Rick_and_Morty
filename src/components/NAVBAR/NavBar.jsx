import React from "react";
import SearchBar from "../SEARCHBAR/SearchBar.jsx";
import s from "../NAVBAR/NavBar.module.css"
import { Link } from "react-router-dom";


export default  function  NavBar({onSearch, setAccess}){
    return (
        <div className={s.contenedor}>
         <div className={s.navbar}>
           
            <div className={s.botones}>
            <Link to="/about" className={s.links}><button className={s.about}> About </button></Link>
            <Link to="/home" className={s.links}><button  className={s.home}> Home </button></Link>
            <button onClick={(e) => {setAccess(false);}} className={s.logout}> Logout </button>
             <Link to="/favorite" className={s.links}><button className={s.favorite}>Favorites</button></Link>
            </div>
           
            <div className={s.searchBar}>
            <SearchBar onSearch={onSearch}/>
            </div>
          </div>
        </div>
    )
}

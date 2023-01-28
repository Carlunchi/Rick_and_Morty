import React from "react";
import { Link } from "react-router-dom";
import s from "../ERROR/Error.module.css"




export default function Error(){
    return(
        <div className={s.Error}>
             
              <br />
            <Link to="/home" ><button className={s.button}>Home</button></Link>
        </div>
    )
}
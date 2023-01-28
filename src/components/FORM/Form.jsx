import React from "react";
import s from "../FORM/Form.module.css"
import { Link } from "react-router-dom";
import validation from "./validation";

export default function Form (props){

    const [userData, setUserData] = React.useState({ username: '', password: '' });
    const [errors, setErrors] = React.useState({ username: '', password: '' });


    const  handleInputChange = (e) =>{
        setUserData({
            ...userData,
            [e.target.name] : e.target.value
        })
        setErrors(
            validation({
                ...userData,
                [e.target.name] : e.target.value
            })
        )
    }


    const handleSubmit = (e) =>{
        e.preventDefault();
        props.login(userData);
    }
    
   return (
    <div className={s.contenedor}>
    <div className={s.form} >
        <form className={s.formulario} onSubmit={handleSubmit}>
            <div className={s.username}>
            <label>Username:</label>
            <input 
            type="text" 
            name="username"
            value={userData.username}
            onChange={handleInputChange}
            className={s.input}
            />
            <p>{errors.username}</p>
            </div>
            <div className={s.password}>
            <label>Password:</label>
            <input 
            type="password"
            name="password"
            value={userData.password} 
            onChange={handleInputChange}
            className={s.input}
            />
            <p>{errors.password}</p>
            </div>
            <div className={s.button}>
            <button  className={s.login}type="submit">LOGIN</button>
            <br />
            </div>
        </form>
    </div>
    </div>
   )
}
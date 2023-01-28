import React from "react";
import imagen from "../../imagenes/yo2.png"
import s from "../ABOUT/About.module.css"


export default function About(){
    return(
        <div className={s.about}>
            <h1 className={s.title}>App Rick and Morty</h1>
            <h2 className={s.subtitle}>Creada por Carla Formento</h2>
            <img className={s.img} src={imagen}/>
            <p className={s.p}>Esta es mi primera aplicación creada en el bootcamp FullStack Developer de Henry:
            En el cual implemento los conocimientos aprendidos en el M2. Utilizando las herramientas de React, Redux y CSS. </p>
            <p className={s.p2}>En la aplicación podrán realizar la búsqueda de un personaje de la serie de Rick and Monty mediante su número de ID o bien si lo desean realizar
                la búsqueda mediante una selección aleatoria en el botón Random ubicado en la parte superior izquierda de la página. Los personajes
                serán traídos a la página a través de una API, la cual cuenta con su número de ID, y sus datos correspondientes, como su origen, su locación, la especie
                y género, etc. A su vez podrán encontrar un botón para poder agregar sus personajes a la sección de favoritos para tenerlos de forma particular. 
                También podrán encontrar en la página un formulario de Login el cual les solicitara un email y una contraseña para poder acceder a la página y poder 
                disfrutar de esta experiencia. El mismo también cuenta con otro botón de Logout en caso de querer cerrar la sesión.
        

            </p>
        </div>
    )
}
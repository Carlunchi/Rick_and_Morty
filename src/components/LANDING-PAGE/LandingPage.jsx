import React from "react";
import { Link } from "react-router-dom";
import video from "../../video/intro.mp4"
import s from "../LANDING-PAGE/Landingpage.module.css"
import audio from "../../video/audio.mp3"



export default function LandingPage(){
    return(
        
        <div className={s.Landing}>
            <audio  controls autoPlay muteloop src={audio}  />
            <video id='video'  className={s.video} autoPlay muted loop src={video}/>    
            <Link to="/home"><button className={s.button}>HOME</button></Link>
        </div>
    )
}
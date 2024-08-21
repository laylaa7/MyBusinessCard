import personalpic from "../assets/personalpic.jpg"
import { useState } from 'react'
export default function General(){
 return(
    <div>
        <img src={personalpic} className="personalpic" />
        <h2>Layla Mohamed</h2>
        <h4>Full Stack Developer</h4>
        <div className="Buttons"> 
            <button>email</button>
            <button>Linkedin</button>
        </div>
    </div>
 )
}
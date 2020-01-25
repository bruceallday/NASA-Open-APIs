import React from 'react'
import './roverimage.styles.css'

const RoverImages = (props) =>{
    return(
       <img className="roverImg" src={props.imageUrl} alt='Mars landscape' />
    )
}

export default RoverImages
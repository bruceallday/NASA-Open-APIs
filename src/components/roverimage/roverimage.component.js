import React from 'react'
import GridListTileBar from "@material-ui/core/GridListTileBar";
import './roverimage.styles.css'

const RoverImages = (props) =>{
    console.log("PROPS:" + props)
    return (
      <div>
        <img className="roverImg" src={props.imageUrl} alt="Mars landscape" />
        <GridListTileBar title={`Sol: ${props.solDate}`} />
      </div>
    );
}

export default RoverImages
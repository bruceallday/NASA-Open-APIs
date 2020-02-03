import React from 'react'
import GridListTileBar from "@material-ui/core/GridListTileBar";
import './roverimage.styles.scss'

const RoverImages = (props) =>{

    const { imageUrl, solDate} = props

    return (
      <div>
        <img className="roverImg" src={imageUrl} alt="Mars landscape" />
        <GridListTileBar title={`Sol: ${solDate}`} />
      </div>
    );
}

export default RoverImages